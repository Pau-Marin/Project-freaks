import { Link } from "next/link"

// todo: check on docs how to make this part
export default function Navbar() {
  return (
    <>
      <nav>
        <li>a{/* <Link to="/">Home</Link> */}</li>
        <li>b{/* <Link to="/movies">Movies</Link> */}</li>
        <li>c{/* <Link to="login">Login</Link> */}</li>
      </nav>
    </>
  )
}
