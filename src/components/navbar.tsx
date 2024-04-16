import {Link} from 'react-router-dom';
import {getDate} from  '../functions/getDate'
import '../style/navbar.css';

function Navbar() {
  return (
  <nav id="navbar">
    <ul id="nav-list" className="flex flex-row list-none">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/todo" className="nav-link">
          Todo List
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link ">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <h2>|</h2>
      </li>
      <li className="nav-item">
        <h2>{getDate()}</h2>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar