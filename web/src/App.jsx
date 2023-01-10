import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import LoginForm from "./components/LoginForm/LoginForm"
import Movies from "./components/Movies/Movies"
import RegisterForm from "./components/RegisterForm/RegisterForm"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  )
}
