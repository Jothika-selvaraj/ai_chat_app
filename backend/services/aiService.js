const axios = require("axios");

exports.getAIResponse = async (prompt) => {
  try {
  const response = await axios.post(
  "https://openrouter.ai/api/v1/chat/completions",
  {
    model: "openrouter/free",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. Give detailed answers with explanation."
      },
      {
        role: "user",
        content: prompt
      }
    ]
  },
  );

    console.log("SUCCESS:", response.data);

    return response?.data?.choices?.[0]?.message?.content || "No response";

  } catch (error) {
    console.error("ERROR:", error.response?.data || error.message);
    throw new Error("AI Service Error");
  }
};