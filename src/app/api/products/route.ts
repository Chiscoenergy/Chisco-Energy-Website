import { NextRequest, NextResponse } from "next/server";
import { productService } from "@/lib/firebase-products";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const availability = searchParams.get("availability") || "";

    let products = await productService.getProducts();

    // Add search filter
    if (search) {
      const searchLower = search.toLowerCase();
      products = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchLower) ||
          (product.excerpt &&
            product.excerpt.toLowerCase().includes(searchLower)) ||
          (product.tags &&
            product.tags.some((tag) => tag.toLowerCase().includes(searchLower)))
      );
    }

    // Add availability filter
    if (availability && availability !== "all") {
      products = products.filter(
        (product) => product.availability === availability
      );
    }

    // Add pagination
    const from = (page - 1) * limit;
    const to = from + limit;
    const paginatedProducts = products.slice(from, to);

    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        page,
        limit,
        total: products.length,
        totalPages: Math.ceil(products.length / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
