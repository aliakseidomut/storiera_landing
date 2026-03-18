// server.js  ← новый файл в КОРНЕ проекта (рядом с package.json)
//
// Запуск:  node server.js
// Требует: npm install express cors dotenv

import express from "express";
import cors from "cors";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!ANTHROPIC_API_KEY) {
  console.error("❌  Нет ANTHROPIC_API_KEY в .env файле!");
  process.exit(1);
}

app.post("/api/chat", async (req, res) => {
  const { systemPrompt, messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages required" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Anthropic error:", data);
      return res.status(response.status).json({ error: data.error?.message ?? "API error" });
    }

    const text = data.content?.map((b) => b.text ?? "").join("") ?? "";
    res.json({ content: text });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅  Сервер запущен на http://localhost:${PORT}`);
});
