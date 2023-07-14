import { useState } from "react"
import "./styles/App.css"
import NewIdeaPage from "./pages/NewIdeaPage/NewIdeaPage"
import AuthPage from "./pages/AuthPage/AuthPage"
import IdeaIndexPage from "./pages/IdeaIndexPage/IdeaIndexPage"

const App = () => {
  const [user, setUser] = useState(null)

  return <main className="App">{user ? <NewIdeaPage /> : <AuthPage />}</main>
}

export default App
