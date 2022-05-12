const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const app = express();
const port = 5001;
const corsOptions = {
  origin: ["http://localhost:4200"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
};

const rsaController = require("./controllers/rsaController");

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/api/getKeys", rsaController.getKeys);
app.get("/api/getPublicKey", rsaController.getPublicKey);
app.post("/api/privateDecrypt", rsaController.privateDecrypt);
app.get("/users", (req, res) => {
  res.json({
    id: "123",
    metadata: "blah",
    data: {
      users: {
        count: 4,
        list: ["bob", "john", "doe"],
      },
    },
  });
});

app.listen(port, () => {
  db.connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
