import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"
import { CheckSession } from "./services/Auth"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import Ideas from "./pages/Ideas"
import Map from "./pages/Map"
import IdeaIndexPage from "./pages/IdeaIndexPage"
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
          <Route path="/ideas/new" element={<Ideas />} />
          <Route path="/maps/new" element={<Map />} />
          <Route path="/ideas/IdeaIndexPage" element={<IdeaIndexPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
