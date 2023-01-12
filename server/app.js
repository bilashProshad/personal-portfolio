const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoute");
const path = require("path");

const app = express();

// server used to send emails
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.use("/api/contact", contactRoutes);

// ------------------- Deployment -------------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Welcome");
  });
}

app.listen(process.env.PORT || 5000, () =>
  console.log("Listening on port 5000")
);
