const path = require("path");
const express = require("express");
const app = express();
const port = 3999;

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
app.get("/terms", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/terms.html"))
);
app.get("/freelance", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/freelance.html"))
);
app.get("/privacy-policy", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/privacy-policy.html"))
);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/404.html"));
});

app.listen(port, () =>
  console.log(`app listening on port http://127.0.0.1:${port}!`)
);
