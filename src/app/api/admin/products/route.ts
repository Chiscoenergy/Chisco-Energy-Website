import { NextRequest, NextResponse } from "next/server";
import { productService } from "@/lib/firebase-products";

export async function GET() {
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
  try {
    const formData = await request.formData();

    const tagsString = formData.get("tags") as string;
    const tags = tagsString
      ? tagsString
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0)
      : [];

    const productData = {
      slug: formData.get("slug") as string,
      title: formData.get("title") as string,
      company: (formData.get("company") as string) || undefined,
      // parse and round price to 2 decimals to avoid floating point drift
      price: (() => {
        const raw = formData.get("price");
        if (!raw) return undefined;
        const parsed = parseFloat(String(raw));
        return isNaN(parsed) ? undefined : Math.round(parsed * 100) / 100;
      })(),
      packSize: formData.get("packSize") as string,
      sku: (formData.get("sku") as string) || undefined,
      availability: formData.get("availability") as "in-stock" | "out-of-stock",
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
      for (const file of imageFiles) {
        if (file.size > 0) {
          const imageUrl = await productService.uploadImage(file, productId);
          images.push(imageUrl);
        }
      }

      // Update product with image URLs
      await productService.updateProduct(productId, { images });
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
