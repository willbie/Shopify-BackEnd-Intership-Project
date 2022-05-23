const express = require('express');
const app = express();
const db = require("../database/index.js");


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

let port = 3000;

app.get('/getAll', (req, res) => {
  db.getAll(req, res);
});

app.post('/create', (req, res) => {
  db.insert(req, res);
});

app.delete('/delete', (req, res) => {
  db.deleteItem(req, res);
});

app.delete('/undelete', (req, res) => {
  db.undelete(req, res);
})

app.post('/update', (req, res) => {
  db.update(req, res);
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});