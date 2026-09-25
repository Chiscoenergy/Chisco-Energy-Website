import { NextRequest, NextResponse } from "next/server";
import { generateAIResponse, type AIChatMessage } from "@/lib/ai/nvidia";
import { productService, type ProductData } from "@/lib/firebase-products";

export async function POST(request: NextRequest) {
  try {
    if (!process.env.NVIDIA_API_KEY) {
      return NextResponse.json(
        { error: "The AI assistant is not configured yet." },
        { status: 503 },
      );
    }

    const body: unknown = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "A valid chat message is required." },
        { status: 400 },
      );
    }

    const input = body as {
      message?: unknown;
      messages?: unknown;
    };
    const rawMessages = Array.isArray(input.messages)
      ? input.messages
      : typeof input.message === "string"
        ? [{ role: "user", content: input.message }]
        : [];

    const messages: AIChatMessage[] = rawMessages
      .filter(
        (item): item is { role: string; content: string } =>
          !!item &&
          typeof item === "object" &&
          (item.role === "user" || item.role === "assistant") &&
          typeof item.content === "string",
      )
      .slice(-12)
      .map((item) => ({
        role: item.role as AIChatMessage["role"],
        content: item.content.trim(),
      }))
      .filter((item) => item.content.length > 0);

    if (!messages.length || messages[messages.length - 1].role !== "user") {
      return NextResponse.json(
        { error: "Please enter a message before sending." },
        { status: 400 },
      );
    }

    if (messages.some((message) => message.content.length > 1000)) {
      return NextResponse.json(
        { error: "Please keep each message under 1000 characters." },
        { status: 400 },
      );
    }

    let products: ProductData[] = [];
    try {
      products = await productService.getProducts();
    } catch (error) {
      console.error("Unable to load product context for AI chat", error);
    }

    const response = await generateAIResponse(messages, products);

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error(
      "Chat API error:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return NextResponse.json(
      {
        error: "The AI assistant could not respond. Please try again shortly.",
      },
      { status: 502 },
    );
  }
}
