const PORT = process.env.PORT || 4242;
const express = require("express");
const next = require("next");
const db = require("../models");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.static("public"));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`<<<----***** server listening on port ${PORT} *****---->>>`);
    });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
