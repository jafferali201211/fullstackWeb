import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Anthropic from "@anthropic-ai/sdk";

// ✅ Load custom env file
dotenv.config({ path: "./keys.env" });

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Debug
console.log("API KEY:", process.env.CLAUDE_API_KEY ? "LOADED ✅" : "NOT LOADED ❌");

// ✅ Initialize client
const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

app.post("/ask", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      messages: [
        { role: "user", content: prompt }
      ]
    });

    res.json({
      reply: response.content[0].text
    });

  } catch (error) {
    console.error("❌ ERROR:", error.message);
    res.status(500).json({
      error: "Claude API failed",
      details: error.message
    });
  }
});

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Server running ✅");
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
``