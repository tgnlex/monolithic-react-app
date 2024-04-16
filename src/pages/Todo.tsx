import {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import '../style/globals.css';
import '../style/todolist.css';
export interface TodoType {
  id: number, 
  title: string, 
  description: string
}
export interface TodoArrayType {
  todos: TodoType[];
}

function Todo() {
  const [todos, setTodos] = useState([{}])
  useEffect(() => {
    axios.get('http://localhost:5173/api/todos')
      .then((res) => {
        setTodos(res.data.todos);
      }
    ) 
  }, []);
  
  return (
    <>
    <Navbar />
      <main id="main">
        <h1 className="heading">Todo List</h1>
       <ul>
        {todos.map(todo => (
          <li>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
      </main>
    </>

  )
}

export default Todo