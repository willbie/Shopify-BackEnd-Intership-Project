const mysql = require('mysql2');
const mysqlConfig = require('./config');

const db = mysql.createConnection(mysqlConfig);

const getAll = (req, res) => {
  let query = `SELECT * from INVENTORY where deleted = 0;`;
  db.query(query, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data);
    }
  })
};

const update = (req, res) => {
  let id = req.body.id;
  let newItem = req.body.item;
  let query = `UPDATE INVENTORY set item = '${newItem}' where id = ${id};`;
  db.query(query, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send('Sucess!');
    }
  })
};

const insert = (req, res) => {
  let item = req.body.item.toString();
  let query = `INSERT INTO INVENTORY (item, deleted) VALUES ('${item}', ${false});`;
  db.query(query, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send('Sucess!');
    }
  })
};

const deleteItem = (req, res) => {
  let query = `UPDATE INVENTORY set deleted = ${true}, deletionComments = '${req.body.deletionComments || null}' where id = ${req.body.id};`;

  db.query(query, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send('Sucess!');
    }
  })
};

const undelete = (req, res) => {
  let query = `UPDATE INVENTORY sete deleted = ${false} where id = ${req.body.id};`;
  db.query(query, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send('Sucess!');
    }
  });
}

module.exports = {
  insert,
  deleteItem,
  update,
  getAll,
  undelete
}