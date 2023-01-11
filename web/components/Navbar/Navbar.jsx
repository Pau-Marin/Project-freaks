import Link from "next/link"

// todo: check on docs how to make this part
export default function Navbar() {
  return (
    <>
      <nav>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </nav>
    </>
  )
}
