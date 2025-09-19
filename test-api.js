const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables manually
function loadEnv() {
  try {
    const envPath = path.join(__dirname, '.env.local');
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');

    lines.forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim();
        if (value.startsWith('"') && value.endsWith('"')) {
          process.env[key.trim()] = value.slice(1, -1);
        } else {
          process.env[key.trim()] = value;
        }
      }
    });
  } catch (error) {
    console.log('❌ Could not load .env.local file');
  }
}

loadEnv();

async function testGeminiAPI() {
  try {
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      console.log('❌ GEMINI_API_KEY not found in environment variables');
      return;
    }

    console.log('🔍 Testing Gemini API Key...');
    console.log('API Key starts with:', API_KEY.substring(0, 20) + '...');

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent('Hello, just testing the API connection.');
    const response = result.response.text();

    console.log('✅ API Key is valid!');
    console.log('Response preview:', response.substring(0, 100) + '...');

  } catch (error) {
    console.log('❌ API Key Error:', error.message);

    if (error.message.includes('API_KEY_INVALID')) {
      console.log('🔧 Solution: Your API key is invalid. Get a new one from:');
      console.log('   https://makersuite.google.com/app/apikey');
    } else if (error.message.includes('PERMISSION_DENIED')) {
      console.log('🔧 Solution: Your API key doesn\'t have permission to use Gemini API.');
      console.log('   Make sure you\'re using a Gemini API key, not a general Google API key.');
    } else if (error.message.includes('QUOTA_EXCEEDED')) {
      console.log('🔧 Solution: You\'ve exceeded your API quota. Check your usage limits.');
    } else {
      console.log('🔧 Unknown error. Check your internet connection and try again.');
    }
  }
}

testGeminiAPI();