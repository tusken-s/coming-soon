const path = require("path");
const express = require("express");
const app = express();
const port = 3999;

app.use(express.static("public"));

console.log(path.join(__dirname, "/public/privacy-policy.html"))

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
app.get("/terms", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/terms.html"))
);
app.get("/privacy-policy", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/privacy-policy.html"))
);

app.listen(port, () =>
  console.log(`app listening on port http://127.0.0.1:${port}!`)
);
