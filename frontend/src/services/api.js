import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-chat-app-1-am66.onrender.com/api/ask-ai"
});

export const askAI = (prompt) => {
  return API.post("/ask-ai", { prompt });
};

export const saveData = (prompt, response) => {
  return API.post("/save", { prompt, response });
};