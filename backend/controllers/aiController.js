const Prompt = require("../models/promptModel");
const { getAIResponse } = require("../services/aiService");


exports.askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const result = await getAIResponse(prompt);

    res.json({ result });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Save to DB
exports.savePrompt = async (req, res) => {
  try {
    const { prompt, response } = req.body;

    const newData = new Prompt({ prompt, response });
    await newData.save();

    res.json({ message: "Saved Successfully" });

  } catch (error) {
    res.status(500).json({ error: "Save Failed" });
  }
};