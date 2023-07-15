import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { CheckSession } from "./services/Auth"
import Nav from "./components/Nav"
import "./styles/App.css"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import LandingPage from "./pages/LandingPage"

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <Nav user={user} handleLogOut={handleLogOut} />
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SigninPage setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/ideas" element={<IdeaLandingPage user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
