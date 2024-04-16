import todos from '../data/todos.js';

export function addTodo (ID, TITLE, DESC) {
  try {
    todos.push({
      id: ID,
      title: TITLE,
      description: DESC,
  })
  } catch (error) {
    console.log(error);
  } 
}