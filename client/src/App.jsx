import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./styles/App.css"
import NewIdeaPage from "./pages/NewIdeaPage/NewIdeaPage"
import AuthPage from "./pages/AuthPage/AuthPage"
import IdeaIndexPage from "./pages/IdeaIndexPage/IdeaIndexPage"
import Header from "./components/Header/Header"

const App = () => {
  const [user, setUser] = useState({})

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
