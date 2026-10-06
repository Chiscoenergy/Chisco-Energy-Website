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

    await productService.updateProduct(id, {
      slug: input.slug.trim(),
      title: input.title.trim(),
      company: typeof input.company === "string" && input.company.trim() ? input.company.trim() : undefined,
      price: typeof input.price === "number" ? Math.round(input.price * 100) / 100 : undefined,
      packSize: typeof input.packSize === "string" ? input.packSize.trim() : "",
      sku: typeof input.sku === "string" && input.sku.trim() ? input.sku.trim() : undefined,
      availability: input.availability,
      tags: Array.isArray(input.tags) ? input.tags.filter((tag): tag is string => typeof tag === "string").map((tag) => tag.trim()).filter(Boolean) : [],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating admin product:", error);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}
