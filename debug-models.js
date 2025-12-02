import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';

// Read .env file manually since we are running with node
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/VITE_GEMINI_API_KEY=(.*)/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!API_KEY) {
    console.error("Could not find API KEY in .env");
    process.exit(1);
}

console.log("Using API Key:", API_KEY.substring(0, 10) + "...");

const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
    try {
        // For listing models, we don't need a specific model instance, 
        // but the SDK doesn't expose listModels directly on genAI instance in all versions.
        // We might need to use the model manager if available, or just try to get a model and see.
        // Actually, looking at SDK docs, usually it's not straightforward to list models via the helper.
        // Let's try to just run a simple generation with 'gemini-1.5-flash' and print the error detailedly if it fails.

        // But wait, the error message suggested: "Call ListModels to see the list of available models"
        // We can do this via a direct fetch if the SDK doesn't make it easy.

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const data = await response.json();

        if (data.models) {
            console.log("Available Models:");
            data.models.forEach(m => {
                if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")) {
                    console.log(`- ${m.name}`);
                }
            });
        } else {
            console.log("No models found or error:", data);
        }

    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
