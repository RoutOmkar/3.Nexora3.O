import { GoogleGenerativeAI } from "@google/generative-ai";

const apikey = "AIzaSyBZqU3vAZ-nNptRu6IwaUlRqmwiMq56-sY";
const ai = new GoogleGenerativeAI(apikey);

async function main(prompt) {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    return text;
  } catch (err) {
    console.error("Gemini Error:", err);
    return "Gemini failed to respond.";
  }
}

export default main;
