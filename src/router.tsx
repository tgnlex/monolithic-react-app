import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import About from './pages/About.tsx';
import Todo from './pages/Todo.tsx';
import App from './App.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/dashboard", 
    element: <Dashboard />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/todo",
    element: <Todo />
  }

]);

export default router;