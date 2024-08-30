const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5500;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html for all unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
