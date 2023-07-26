const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Merhaba, Dünya!" });
});

app.use("/login", require("./users/users-router"));
app.use("/sefer", require("./seferler/sefer-router"));
app.use("/koltuk", require("./koltuklar/koltuklar-router"));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app; // app nesnesini dışa aktarıyoruz
