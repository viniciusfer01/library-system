const express = require("express");
const bodyParser = require("body-parser");
const books = require("../model/books");
const app = express();

app.get("/obras", (req, res) => {
  res.json(JSON.stringify(books.getAllBooks()));
});

app.post("/obras", bodyParser.json(), (req, res) => {
  let { titulo, editora, foto, autores } = req.body;

  books.newBook(titulo, editora, foto, autores);
  res.send("book added successfully");
});

app.put("/obras", bodyParser.json(), (req, res) => {
  let { id, titulo, editora, foto, autores } = req.body;
  books.updateBook(id, titulo, editora, foto, autores);
  res.send("book updated successfully");
});

app.delete("/obras", bodyParser.json(), (req, res) => {
  let id = req.body.id;
  books.deleteBook(id);
  res.send("book deleted successfully");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
