const express = require("express");
const client = require("twilio")("{Your Token acess}", "{Your Token acess}");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());

app.get("/", (req, res) => {
  sendTextMessage();
  res.send(`
    <h1>welcome</h1>
    `);
});

app.listen(8081, () => {
  console.log("Server started on port 8081");
});

function sendTextMessage() {
  client.messages
    .create({
      body: "Hello from Node",
      to: "+5562993775950",
      from: "+13862725088",
    })
    .then((message) => console.log(message))
    // here you can implement your fallback code
    .catch((error) => console.log(error));
}
