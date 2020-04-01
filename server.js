const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get("/", function(req, res) {
  return res.render("sobre");
});

server.get("/conteudos", (req, res) => {
  return res.render("conteudos");
});

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(3333, function() {
  console.log("O pai ta on na porta 3333");
});
