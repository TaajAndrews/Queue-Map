import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Client from "../services/api"
import { useGetUserToken } from "../hooks/useGetUserToken"

const Home = () => {
  let navigate = useNavigate()

  const [ideas, setIdeas] = useState([])
  const [savedIdeas, setSavedIdeas] = useState([])
  const userID = useGetUserToken()

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        let res = await Client.get("/ideas", ideas)
        setIdeas(res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchSavedIdeas = async () => {
      try {
        let res = await Client.get(`/ideas/savedIdeas/ids/${userID}`)
        setSavedIdeas(res.data.savedIdeas)
      } catch (error) {
        console.log(error)
      }
      fetchIdeas()
      fetchSavedIdeas()
    }
  }, [])

  const saveIdea = async (ideaID) => {
    try {
      let res = await Client.put("/ideas", { ideaID, userID }, ideas)
      setIdeas(res.data.savedIdeasÍ)
    } catch (error) {
      console.log(error)
    }
  }

  const isFeatured = (id) => savedIdeas.includes(id)

  return (
    <div className="home-container col">
      <section className="welcome-signin">
        <button onClick={() => navigate("/signin")}>
          Click Here To Get Started
        </button>
        <div>
          <h1>Ideas</h1>
          <ul>
            {ideas.map((idea) => (
              <li key={idea._id}>
                <div>
                  <h2>{idea.topic}</h2>
                  <button
                    onClick={() => saveIdea(idea._id)}
                    disabled={isFeatured(idea._id)}
                  >
                    {isFeatured(idea._id) ? "Featured" : "Feature"}
                  </button>
                </div>
                <div className="idea-content">
                  <p>{ideas.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home
