import {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import '../style/globals.css';
import '../style/todolist.css';

function Todo() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetch('/api/test', {
      headers: {
        accept: 'application/json',
      },
    }
    )
   .then(response => {
    if (response.ok) {
      response.json().then(json => {
        console.log(json)
        setMessage(json);
      })
    }
   })
  })

  console.log(message);
  return (
    <>
    <Navbar />
      <main id="main">
        <h1 className="heading">Todo List</h1>
        <p>API test</p>
        <p>{!message ? "Loading" : message} </p>
      </main>
    </>

  )
}

export default Todo