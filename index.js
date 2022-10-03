const express = require("express");
const client = require("twilio")(
  "AC64dd1cf6d6bde99a44123418b4ed971c",
  "80d05605e7d306b31296d0960c53bab6"
);
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
