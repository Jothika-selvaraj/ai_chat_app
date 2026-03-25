import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-chat-app-1-am66.onrender.com"
});

// Ask AI API
export const askAI = async (prompt) => {
  try {
    const response = await API.post("/api/ask-ai", { prompt });
    return response;
  } catch (error) {
    console.error("Error in askAI:", error);
    throw error;
  }
};


export const saveData = async (prompt, response) => {
  try {
    const res = await API.post("/api/save", { prompt, response });
    return res;
  } catch (error) {
    console.error("Error in saveData:", error);
    throw error;
  }
};