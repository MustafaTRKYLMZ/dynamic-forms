import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import templateRoutes from "./routes/templates";
import eventRoutes from "./routes/events";
import authRoutes from "./routes/auth";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/templates", templateRoutes);
app.use("/api/events", eventRoutes); // Corrected route definition
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
