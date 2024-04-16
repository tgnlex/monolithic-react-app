import express from 'express';
import cors from 'cors';
import todos from './data/todos.js';
import {addTodo} from './lib/addTodo.js'
import {serverMessage, error, PORT} from './constants.js';
const app = express();

app.use(cors);
app.use(express.json());

app.get('/api/test', (req, res , next) => {
  res.setHeader('Content-Type','application/json')
  console.log("Endpoint Hit!")
  res.json({message: "Hello World!"});
  next()
})

app.get('/api/todos', (req, res, next) => {
  res.json(todos)
  console.log(todos)
  next()
})
app.post('/api/todos/new', (req, res, next) => {
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