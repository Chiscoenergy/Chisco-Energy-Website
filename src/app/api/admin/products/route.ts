import { NextRequest, NextResponse } from "next/server";
import { getAdminUser } from "@/lib/auth/admin";
import { productService } from "@/lib/firebase-products";
import type { ProductData } from "@/lib/firebase-products";

async function isAdmin(request: NextRequest) {
  const user = await getAdminUser(request);
  return user?.role === "admin";
}

export async function GET(request: NextRequest) {
  if (!(await isAdmin(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const products = await productService.getProducts();
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAdmin(request))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const formData = await request.formData();

    const title = String(formData.get("title") || "").trim();
    const slug = String(formData.get("slug") || "").trim();
    const packSize = String(formData.get("packSize") || "").trim();
    const availability = formData.get("availability");
    if (!title || !slug || !packSize) {
      return NextResponse.json({ error: "Title, slug, and pack size are required" }, { status: 400 });
    }
    if (availability !== "in-stock" && availability !== "out-of-stock" && availability !== "pre-order") {
      return NextResponse.json({ error: "Invalid availability" }, { status: 400 });
    }
    const productAvailability = availability as ProductData["availability"];
    const rawPrice = formData.get("price");
    const parsedPrice = rawPrice ? Number(rawPrice) : undefined;
    if (parsedPrice !== undefined && (!Number.isFinite(parsedPrice) || parsedPrice < 0)) {
      return NextResponse.json({ error: "Price must be a non-negative number" }, { status: 400 });
    }

    const tagsString = formData.get("tags") as string;
    const tags = tagsString
      ? tagsString
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0)
      : [];

    const productData = {
      slug,
      title,
      company: (formData.get("company") as string) || undefined,
      // parse and round price to 2 decimals to avoid floating point drift
      price: parsedPrice === undefined ? undefined : Math.round(parsedPrice * 100) / 100,
      packSize,
      sku: (formData.get("sku") as string) || undefined,
      availability: productAvailability,
      tags: tags,
      images: [], // Will be populated after image uploads
    };

    // Handle image uploads
    const images: string[] = [];
    const imageFiles = formData.getAll("images") as File[];

    if (imageFiles.length > 0) {
      // Create product first to get ID for image paths
      const productId = await productService.createProduct(productData);

      // Upload images
      try {
        for (const file of imageFiles) {
          if (file.size > 0) {
            const imageUrl = await productService.uploadImage(file, productId);
            images.push(imageUrl);
          }
        }

        // Update product with image URLs
        await productService.updateProduct(productId, { images });
      } catch (uploadError) {
        await Promise.allSettled(images.map((imageUrl) => productService.deleteImage(imageUrl)));
        await productService.deleteProduct(productId);
        throw uploadError;
      }
    } else {
      // Create product without images
      await productService.createProduct(productData);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
