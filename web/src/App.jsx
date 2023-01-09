import "./App.css"
import { Route, Routes } from "react-router-dom"
import LoginForm from "./componets/LoginForm/LoginForm"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default App
