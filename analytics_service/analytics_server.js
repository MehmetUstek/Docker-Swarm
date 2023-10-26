const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.type("text/html");
  res.send(serveCoffee());
});

app.listen(port, (req, res) => {
  console.log(`Analytics running at http://localhost:${port}/`);
});

function serveCoffee(type = undefined) {
  message = "Analytics Server";

  let contentPayload = `    
    <html>
    <head>
    <style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    </style>
    </head>
    <body>
    <div style="font-size:80">
    <center><b style="font-size:400">${message}</center></div>
    </body>
    </html>`;

  return contentPayload;
}
