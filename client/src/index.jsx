import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import baseAPI from './apis.js';

const App = () => {
  const [item, setItem] = useState("");
  const [deletionComments, setDeletionComments] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(baseAPI + "getAll")
    .then((res) => {
      setList(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  const createItem = () => {
    axios.post(baseAPI + 'create', {
      item: item
    })
    .then((res) => {
      console.log("Success!");
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const updateItem = id => {
    axios.post(baseAPI + 'update', {
      id: id,
      item: item
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const deleteItem = (id, deleteComments) => {
    axios.delete(baseAPI + '/delete', {
      id: id,
      deleteComments: deleteComments
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const unDeleteItem = id => {
    axios.delete(baseAPI + 'undelete', {
      id: id
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
       <title>Shopify Intership</title>
       <input className="create" placeholder="Create item here" onChange={event => setItem(event.target.value)}></input>
       <buttom  id="create-submit" onClick={() =>createItem()}>submit</buttom>
       <div className="List">{
         list.map((item) => {
          return (
            <div>
              <span>{item.item}</span>
              <buttom onClick={() => deleteItem(item.id, deleteComments)}>delete</buttom>
              <input className="delete-comments" placeholder="delete comment!" onChange={e => setDeletionComments(e.target.value)}></input>
              <buttom onClick={() => undeleteItem(item.id)}>undelete</buttom>
            </div>
          )
         })
       }</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));