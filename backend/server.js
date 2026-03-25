const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", aiRoutes);
app.get("/", (req, res) => {
  res.send("API is running ");
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});