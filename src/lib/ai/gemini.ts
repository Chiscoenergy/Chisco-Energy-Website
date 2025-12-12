import { GoogleGenerativeAI } from "@google/generative-ai";

// List of model names to try in order of preference
const MODEL_NAMES = ["gemini-2.0-flash-lite"];

const SYSTEM_INSTRUCTION = `You are ChiscoBot, an AI assistant for Chisco Energy, a leading petroleum products company in Nigeria. You help customers with information about our services, products, and general inquiries.

Key information about Chisco Energy:
- Leading petroleum products company based in Nigeria
- Products: Diesel fuel, Petrol (gasoline), Kerosene, Lubricants/Motor oils, Gas products
- Services: Bulk storage facilities, Gas distribution, Haulage/transportation, Retail fuel stations, Lube oil services
- We serve individual customers, businesses, and industrial clients
- Contact: WhatsApp +234 816 631 9502
- All orders and quotes are processed via WhatsApp for efficient communication

Our Product Range:
- AGO (Automotive Gas Oil/Diesel) - for vehicles, generators, industrial use
- PMS (Premium Motor Spirit/Petrol) - for vehicles and small engines  
- DPK (Dual Purpose Kerosene) - for household and industrial use
- Lubricants - Various motor oils like 20W50, SAE 40 for different engines
- Gas products - LPG for cooking and industrial applications

Guidelines:
- Be friendly, professional, and helpful
- Provide accurate information about petroleum products and their uses
- For pricing: Explain that prices vary by product, quantity, and current market rates
- For orders: Direct to website ordering system or WhatsApp +234 816 631 9502
- For delivery: Mention we provide delivery services, arrangements made via WhatsApp
- Keep responses concise but informative
- Use Nigerian context (prices in Naira, local references)

Always offer to connect them with our team via WhatsApp for specific quotes and orders.`;

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export class GeminiChatService {
  private genAI: GoogleGenerativeAI | null = null;
  private model: ReturnType<GoogleGenerativeAI["getGenerativeModel"]> | null =
    null;

  /**
   * Lazy initialization - only initialize when actually needed
   * This works better in serverless environments
   */
  private async ensureInitialized() {
    if (this.model) {
      return this.model;
    }

    const apiKey = process.env.GEMINI_API_KEY;

    console.log("🔑 Initializing Gemini with API key:", !!apiKey);
    console.log("🔑 API Key length:", apiKey?.length);

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }

    this.genAI = new GoogleGenerativeAI(apiKey);

    // Try to initialize with the first available model
    for (const modelName of MODEL_NAMES) {
      try {
        console.log(`🔍 Trying model: ${modelName}`);
        this.model = this.genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: SYSTEM_INSTRUCTION,
        });
        console.log(`✅ Successfully initialized model: ${modelName}`);
        return this.model;
      } catch (modelError) {
        console.log(`❌ Failed to initialize ${modelName}:`, modelError);
        continue;
      }
    }

    throw new Error("Failed to initialize any Gemini model");
  }

  async sendMessage(message: string): Promise<string> {
    try {
      console.log("🤖 Gemini sendMessage called with:", message);

      const model = await this.ensureInitialized();

      console.log("� Sending message to Gemini...");

      // Use generateContent instead of chat for stateless operation in serverless
      const result = await model.generateContent([{ text: message }]);

      console.log("📥 Getting response...");
      const response = result.response;
      const text = response.text();

      console.log("✅ Success! Response length:", text.length);
      return text;
    } catch (error) {
      console.error("❌ Gemini API error:", error);

      if (error instanceof Error) {
        console.error("❌ Error name:", error.name);
        console.error("❌ Error message:", error.message);

        // Check for specific Google API errors
        if (
          error.message.includes("API_KEY") ||
          error.message.includes("INVALID_ARGUMENT")
        ) {
          throw new Error(`API Key issue: ${error.message}`);
        }
        if (
          error.message.includes("quota") ||
          error.message.includes("RESOURCE_EXHAUSTED")
        ) {
          throw new Error(`Quota exceeded: ${error.message}`);
        }
        if (error.message.includes("PERMISSION_DENIED")) {
          throw new Error(
            `Permission denied - check API key permissions: ${error.message}`
          );
        }
        throw new Error(`Gemini API error: ${error.message}`);
      }

      throw new Error(`Unknown error: ${String(error)}`);
    }
  }

  async generateResponse(message: string): Promise<string> {
    return this.sendMessage(message);
  }
}

export const geminiChat = new GeminiChatService();
