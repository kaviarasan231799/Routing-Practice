import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        className="wave"
        alt="wave"
      />
      <h1 className="heading">wave</h1>
    </div>

    <ul className="un-order">
      <li className="list-link">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="list-link">
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li className="list-link">
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
