const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoute");

const app = express();

// server used to send emails
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(process.env.PORT || 5000, () =>
  console.log("Listening on port 5000")
);
