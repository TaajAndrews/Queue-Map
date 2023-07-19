import { useEffect, useState } from "react"
import { GetIdeas } from "../services/IdeaServices"
import { useNavigate } from "react-router-dom"

const IdeaIndexPage = ({ user }) => {
  let navigate = useNavigate()

  const [ideas, setIdeas] = useState([])

  useEffect(() => {
    const handleIdeas = async () => {
      const data = await GetIdeas()
      setIdeas(data)
    }
    handleIdeas()
  }, [])

  return user ? (
    <div className="form-wrapper">
      <h1>This is the idea index page</h1>
      {ideas.map((idea) => (
        <div className="card" key={idea.id}>
          <h3>{idea.topic}</h3>
          <div></div>
          {idea.content.length >= 100 ? (
            <p>{idea.content.substring(0, 100)}...</p>
          ) : (
            <p>{idea.content}</p>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>
  )
}

export default IdeaIndexPage
