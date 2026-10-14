import { NextRequest, NextResponse } from "next/server";
import { getAdminUser } from "@/lib/auth/admin";
import { productService } from "@/lib/firebase-products";

async function isAdmin(request: NextRequest) {
  const user = await getAdminUser(request);
  return user?.role === "admin";
}

function getProductId(request: NextRequest) {
  return request.nextUrl.searchParams.get("id")?.trim() || null;
}

export async function GET(request: NextRequest) {
  if (!(await isAdmin(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = getProductId(request);
  if (!id) return NextResponse.json({ error: "Product id is required" }, { status: 400 });

  try {
    const products = await productService.getProducts();
    const product = products.find((item) => item.id === id);
    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json({ product });
  } catch (error) {
    console.error("Error fetching admin product:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!(await isAdmin(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = getProductId(request);
  if (!id) return NextResponse.json({ error: "Product id is required" }, { status: 400 });

  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid product data" }, { status: 400 });
    }
    const input = body as Record<string, unknown>;
    if (typeof input.title !== "string" || !input.title.trim()) {
      return NextResponse.json({ error: "A product title is required" }, { status: 400 });
    }
    if (typeof input.slug !== "string" || !input.slug.trim()) {
      return NextResponse.json({ error: "A product slug is required" }, { status: 400 });
    }
    if (input.price !== null && input.price !== undefined &&
      (typeof input.price !== "number" || !Number.isFinite(input.price) || input.price < 0)) {
      return NextResponse.json({ error: "Price must be a non-negative number" }, { status: 400 });
    }
    if (input.company !== undefined && input.company !== null && typeof input.company !== "string") {
      return NextResponse.json({ error: "Company must be text" }, { status: 400 });
    }
    if (input.sku !== undefined && input.sku !== null && typeof input.sku !== "string") {
      return NextResponse.json({ error: "SKU must be text" }, { status: 400 });
    }
    if (input.packSize !== undefined && typeof input.packSize !== "string") {
      return NextResponse.json({ error: "Pack size must be text" }, { status: 400 });
    }
    if (input.availability !== "in-stock" && input.availability !== "out-of-stock" && input.availability !== "pre-order") {
      return NextResponse.json({ error: "Invalid availability" }, { status: 400 });
    }
    if (input.tags !== undefined && (!Array.isArray(input.tags) || !input.tags.every((tag) => typeof tag === "string"))) {
      return NextResponse.json({ error: "Tags must be a list of strings" }, { status: 400 });
    }

    const products = await productService.getProducts();
    if (!products.some((product) => product.id === id)) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const updates: Parameters<typeof productService.updateProduct>[1] = {
      slug: input.slug.trim(),
      title: input.title.trim(),
      availability: input.availability,
    };
    if (input.company !== undefined) updates.company = typeof input.company === "string" && input.company.trim() ? input.company.trim() : null;
    if (input.price !== undefined) updates.price = typeof input.price === "number" ? Math.round(input.price * 100) / 100 : null;
    if (input.packSize !== undefined) updates.packSize = input.packSize.trim();
    if (input.sku !== undefined) updates.sku = typeof input.sku === "string" && input.sku.trim() ? input.sku.trim() : null;
    if (Array.isArray(input.tags)) updates.tags = input.tags.map((tag) => tag.trim()).filter(Boolean);
    await productService.updateProduct(id, updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating admin product:", error);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAdmin(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = getProductId(request);
  if (!id) return NextResponse.json({ error: "Product id is required" }, { status: 400 });

  try {
    const products = await productService.getProducts();
    const product = products.find((item) => item.id === id);
    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    await productService.deleteProduct(id);
    // Storage cleanup is best-effort: a stale image must not make the catalog deletion fail.
    await Promise.allSettled((product.images || []).map((imageUrl) => productService.deleteImage(imageUrl)));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting admin product:", error);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
