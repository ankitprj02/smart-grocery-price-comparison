import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;

if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
}

export const isGeminiConfigured = () => !!API_KEY;

// Helper to try multiple models in case of 404s or deprecations
const runWithModelFallback = async (operation) => {
    // Updated list based on available models
    const models = ["gemini-2.0-flash", "gemini-2.0-flash-lite", "gemini-flash-latest"];
    let lastError;

    for (const modelName of models) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            return await operation(model);
        } catch (error) {
            console.warn(`Gemini Model ${modelName} failed:`, error.message);
            lastError = error;
            // Continue to next model
        }
    }
    throw lastError;
};

export const generateProductInsights = async (product) => {
    if (!genAI) throw new Error("Gemini API key not configured");

    const prompt = `
    Analyze this grocery product:
    Name: ${product.name}
    Category: ${product.category}
    Price: ${product.prices[0].price}
    
    Provide 3 short, distinct insights in JSON format with keys: "healthCheck", "usageTip", "storage".
    - healthCheck: Nutritional value or health implication (max 15 words).
    - usageTip: A creative or common way to use it (max 15 words).
    - storage: Best way to store it for freshness (max 10 words).
    
    Do not include markdown formatting like \`\`\`json. Just the raw JSON string.
  `;

    return runWithModelFallback(async (model) => {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanText);
    });
};

export const chatWithAI = async (history, userMessage, product) => {
    if (!genAI) throw new Error("Gemini API key not configured");

    return runWithModelFallback(async (model) => {
        // Construct a chat session with context
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{
                        text: `You are a helpful shopping assistant. You are analyzing this product: ${product.name} (${product.category}). 
          Context: ${product.description || ''} ${product.nutrition || ''} ${product.aiContext || ''}.
          Keep answers concise (under 50 words) and helpful.` }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I will help the user with concise, accurate information about this product." }],
                },
                ...history.map(msg => ({
                    role: msg.role === 'ai' ? 'model' : 'user',
                    parts: [{ text: msg.content }]
                }))
            ],
        });

        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        return response.text();
    });
};
