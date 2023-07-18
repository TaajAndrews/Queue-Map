import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"
import { CheckSession } from "./services/Auth"
import Nav from "./components/Nav"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import IdeaIndexPage from "./pages/IdeaIndexPage"
import Home from "./pages/Home"
import "./styles/App.css"

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ideas" element={<IdeaIndexPage user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
