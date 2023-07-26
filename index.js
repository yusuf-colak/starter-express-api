const app = require("./api/server.js");

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

app.listen(process.env.PORT || 3000);
