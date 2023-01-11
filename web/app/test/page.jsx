import Link from "next/link"

export default function Test() {
  return (
    <div>
      <h1>Test page</h1>
      <p>This page should be rendered on /test</p>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
