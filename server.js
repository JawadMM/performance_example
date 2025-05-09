const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

app.get("/", (req, res) => {
  res.send(`Performance Example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Delayed... ${process.pid}`);
});

console.log("Worker process started...");
app.listen(3000, () => {
  // console.log("Listening on port 3000...");
});
