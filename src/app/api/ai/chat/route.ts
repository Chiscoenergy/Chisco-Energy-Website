import { NextRequest, NextResponse } from "next/server";
import { geminiChat } from "@/lib/ai/gemini";

export async function POST(request: NextRequest) {
  try {
    // Debug: Check API key
    const apiKey = process.env.GEMINI_API_KEY;
    console.log("🔑 API Key available:", !!apiKey);
    console.log("🔑 API Key length:", apiKey?.length);
    console.log("🔑 API Key starts with:", apiKey?.substring(0, 10) + "...");

    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message too long. Please keep it under 1000 characters." },
        { status: 400 }
      );
    }

    console.log("📤 Sending message to Gemini:", message);
    const response = await geminiChat.generateResponse(message);
    console.log(
      "📥 Received response from Gemini:",
      response.substring(0, 100) + "..."
    );

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Chat API error:", error);
    if (error instanceof Error) {
      console.error("❌ Error message:", error.message);
      console.error("❌ Error stack:", error.stack);
    }
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate response. Please try again.",
      },
      { status: 500 }
    );
  }
}
