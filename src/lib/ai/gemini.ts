import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `You are ChiscoBot, an AI assistant for Chisco Energy, a leading petroleum products company in Nigeria. You help customers with information about our services, products, and general inquiries.

Key information about Chisco Energy:
- We are a petroleum products company based in Nigeria
- We provide fuel products including diesel, petrol, kerosene, and lubricants
- Services include bulk storage, gas distribution, haulage, and retail fuel stations
- We serve both individual customers and businesses
- All orders are processed via WhatsApp for efficient communication

Guidelines:
- Be friendly, professional, and helpful
- Provide accurate information about petroleum products and services
- For orders, direct customers to use the website's order system or WhatsApp
- If you don't know something specific, suggest contacting customer service
- Keep responses concise but informative
- Use Nigerian context where appropriate (currency in Naira, local references)

If customers ask about:
- Pricing: Explain that prices vary by product and quantity, suggest contacting for quote
- Delivery: Mention that delivery arrangements are made via WhatsApp
- Products: Provide general information about fuel types and uses
- Services: Explain our core services (bulk storage, gas, haulage, lube-oil, retail)

Always end responses by offering further assistance.`,
});

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export class GeminiChatService {
  private chat: ReturnType<typeof model.startChat> | null = null;

  async initializeChat() {
    if (!this.chat) {
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
    }
    return this.chat;
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const chat = await this.initializeChat();
      const result = await chat.sendMessage(message);
      const response = result.response;
      return response.text();
    } catch (error) {
      console.error("Gemini API error:", error);
      return "I apologize, but I'm having trouble connecting right now. Please try again later or contact our customer service team directly via WhatsApp.";
    }
  }

  async generateResponse(message: string): Promise<string> {
    return this.sendMessage(message);
  }
}

export const geminiChat = new GeminiChatService();
