const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const aiRoutes = require("./routes/aiRoutes");

const app = express();


app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/api", aiRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});