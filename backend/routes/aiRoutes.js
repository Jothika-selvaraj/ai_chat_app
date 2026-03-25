const express = require("express");
const router = express.Router();

const { askAI, savePrompt } = require("../controllers/aiController");

router.post("/ask-ai", askAI);
router.post("/save", savePrompt);

module.exports = router;