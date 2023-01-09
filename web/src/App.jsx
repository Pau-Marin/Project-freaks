import "./App.css"
import { Route, Routes } from "react-router-dom"
import LoginForm from "./componets/LoginForm/LoginForm"
import RegisterForm from "./componets/RegisterForm/RegisterForm"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  )
}

export default App
