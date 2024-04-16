import express from 'express';
import cors from 'cors';
import todos from './data/todos.js';
import {addTodo} from './lib/addTodo.js'
import {serverMessage, error, PORT} from './constants.js';
//import {createProxyMiddleware} from 'http-proxy-middleware'; 
const app = express();

app.use(cors);
app.use(express.json());


app.get('/api/test', (req, res , next) => {
  console.log("Endpoint Hit!")
  res.send("Hello World!");
  next()
})

app.get('/todos', (req, res, next) => {
  res.json(todos)
  console.log(todos)
  next()
})
app.post('/todos', (req, res, next) => {
  let newTitle = req.body.title;
  let newDesc = req.body.description
  let newId = todos.length + 1;
  addTodo(newTitle, newDesc, newId);

  if (error) {
    res.status(418);
    console.log(error)
  }
  res.status(200);
  next();
})

app.listen(PORT, () => {
  console.log(serverMessage)
})