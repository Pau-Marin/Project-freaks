import React, { useState } from "react"
import Link from "next/link"

export default function index() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    // You can make a call to a function here to send these data to the server or perform some other action
    console.log(email, password)
  }

  return (
    <div>
      <h2>LOG IN</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log In</button>
        <br />
        <Link href="/register">Don't have an account? Register here.</Link>
      </form>
    </div>
  )
}
