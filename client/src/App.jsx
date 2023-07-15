import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import "./styles/App.css"
import NewIdeaPage from "./pages/NewIdeaPage"
import AuthPage from "./pages/SignupPage"
import IdeaIndexPage from "./pages/IdeaIndexPage"
import Header from "./components/Header"

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <div>
      <main className="App">
        {user ? (
          <>
            <Header />
            <Routes>
              <Route path="/ideas/new" element={<NewIdeaPage />} />
              <Route path="/ideas" element={<IdeaIndexPage />} />
            </Routes>
          </>
        ) : (
          <AuthPage />
        )}
      </main>
    </div>
  )
}

export default App
