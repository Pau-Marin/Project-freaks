import { Link } from "react-router-dom"

// TODO: Add movies component to App.jsx && update Link
export default function Navbar() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="login">Login</Link>
      </li>
    </nav>
  )
}
