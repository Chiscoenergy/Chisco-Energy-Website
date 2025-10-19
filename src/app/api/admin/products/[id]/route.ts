import { NextRequest, NextResponse } from "next/server";
import { productService } from "@/lib/firebase-products";
import { Product } from "@/types/product";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const products = await productService.getProducts();
    const product = products.find((p) => p.id === id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const formData = await request.formData();

    const tagsString = formData.get("tags") as string;
    const tags = tagsString
      ? tagsString
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0)
      : [];

    const updates: Record<string, string | string[] | number> = {
      title: formData.get("title") as string,
      company: formData.get("company") as string,
      packSize: formData.get("packSize") as string,
      availability: formData.get("availability") as "in-stock" | "out-of-stock",
      tags: tags,
    };

    // price can be optional and numeric — parse and round to 2 decimals to avoid floating point drift
    if (formData.get("price")) {
      const raw = String(formData.get("price"));
      const parsed = parseFloat(raw);
      if (!isNaN(parsed)) {
        updates.price = Math.round(parsed * 100) / 100;
      }
    }

    // Handle image uploads if any
    const newImages = formData.getAll("images") as File[];
    if (newImages.length > 0) {
      // Get current product to handle existing images
      const products = await productService.getProducts();
      const currentProduct = products.find((p) => p.id === id);

      // Delete old images from storage before uploading new ones
      if (currentProduct && currentProduct.images) {
        for (const imageUrl of currentProduct.images) {
          try {
            await productService.deleteImage(imageUrl);
          } catch (imageError) {
            console.warn("Failed to delete old image:", imageUrl, imageError);
          }
        }
      }

      // Upload new images
      const imageUrls: string[] = [];
      for (const file of newImages) {
        if (file.size > 0) {
          const imageUrl = await productService.uploadImage(file, id);
          imageUrls.push(imageUrl);
        }
      }

      // Replace images with new ones
      updates.images = imageUrls;
    }

    await productService.updateProduct(id, updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    // Get product to delete associated images
    const products = await productService.getProducts();
    const product = products.find((p) => p.id === id);

    if (product && product.images) {
      // Delete all associated images
      for (const imageUrl of product.images) {
        try {
          await productService.deleteImage(imageUrl);
        } catch (imageError) {
          console.warn("Failed to delete image:", imageUrl, imageError);
        }
      }
    }

    await productService.deleteProduct(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
