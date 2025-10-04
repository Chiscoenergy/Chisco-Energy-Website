import { GoogleGenerativeAI } from "@google/generative-ai";

// Get API key from environment variables
const API_KEY = process.env.GEMINI_API_KEY;

let genAI: GoogleGenerativeAI;
let model: ReturnType<GoogleGenerativeAI["getGenerativeModel"]>;

// List of model names to try in order of preference (based on October 2025 Google AI docs)
const MODEL_NAMES = [
  "gemini-2.5-flash", // Current best price-performance model (recommended)
  "gemini-2.5-pro", // Most advanced thinking model
  "gemini-2.5-flash-lite", // Fastest and most cost-efficient
  "gemini-2.0-flash", // Previous generation workhorse
  "gemini-2.0-flash-lite", // Previous generation fast model
];

try {
  console.log("🔑 Initializing Gemini with API key:", !!API_KEY);
  console.log("🔑 API Key length:", API_KEY?.length);

  if (!API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable is not set");
  }

  genAI = new GoogleGenerativeAI(API_KEY);

  // Try to initialize with the first available model
  let modelInitialized = false;
  for (const modelName of MODEL_NAMES) {
    try {
      console.log(`🔍 Trying model: ${modelName}`);
      model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: `You are ChiscoBot, an AI assistant for Chisco Energy, a leading petroleum products company in Nigeria. You help customers with information about our services, products, and general inquiries.

Key information about Chisco Energy:
- Leading petroleum products company based in Nigeria
- Products: Diesel fuel, Petrol (gasoline), Kerosene, Lubricants/Motor oils, Gas products
- Services: Bulk storage facilities, Gas distribution, Haulage/transportation, Retail fuel stations, Lube oil services
- We serve individual customers, businesses, and industrial clients
- Contact: WhatsApp +234 823 636 570
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
- For orders: Direct to website ordering system or WhatsApp +234 823 636 570
- For delivery: Mention we provide delivery services, arrangements made via WhatsApp
- Keep responses concise but informative
- Use Nigerian context (prices in Naira, local references)

Always offer to connect them with our team via WhatsApp for specific quotes and orders.`,
      });

      console.log(`✅ Successfully initialized model: ${modelName}`);
      modelInitialized = true;
      break;
    } catch (modelError) {
      console.log(`❌ Failed to initialize ${modelName}:`, modelError);
      continue;
    }
  }

  if (!modelInitialized) {
    throw new Error("Failed to initialize any Gemini model");
  }

  console.log("✅ Gemini model initialized successfully");
} catch (error) {
  console.error("❌ Failed to initialize Gemini:", error);
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export class GeminiChatService {
  private chat: ReturnType<typeof model.startChat> | null = null;

  async initializeChat() {
    try {
      if (!model) {
        throw new Error("Gemini model not initialized");
      }

      if (!this.chat) {
        console.log("🚀 Creating new chat session...");
        this.chat = model.startChat({
          history: [
            {
              role: "user",
              parts: [
                { text: "Hello, I need help with Chisco Energy services." },
              ],
            },
            {
              role: "model",
              parts: [
                {
                  text: "Hello! I'm ChiscoBot, your AI assistant for Chisco Energy. I'm here to help you with information about our petroleum products and services. How can I assist you today?",
                },
              ],
            },
          ],
        });
        console.log("✅ Chat session created");
      }
      return this.chat;
    } catch (error) {
      console.error("❌ Error initializing chat:", error);
      throw error;
    }
  }

  async sendMessage(message: string): Promise<string> {
    try {
      console.log("🤖 Gemini sendMessage called with:", message);

      if (!API_KEY) {
        console.error("❌ No API key available");
        throw new Error("Gemini API key not configured");
      }

      console.log("🔧 Initializing chat...");
      const chat = await this.initializeChat();

      console.log("📤 Sending message to Gemini...");
      const result = await chat.sendMessage(message);

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
        console.error("❌ Error stack:", error.stack);

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
