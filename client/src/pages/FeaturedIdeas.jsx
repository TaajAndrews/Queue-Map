import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Client from "../services/api"
import { useGetUserToken } from "../hooks/useGetUserToken"

const FeaturedIdeas = () => {
  let navigate = useNavigate()

  const [savedIdeas, setSavedIdeas] = useState([])
  const userID = useGetUserToken()

  useEffect(() => {
    const fetchSavedIdeas = async () => {
      try {
        let res = await Client.get(`/ideas/savedIdeas/${userID}`)
        setSavedIdeas(res.data.savedIdeas)
      } catch (error) {
        console.log(error)
      }
      fetchIdeas()
      fetchSavedIdeas()
    }
  }, [])

  return (
    <div className="home-container col">
      <section className="featured-ideas">
        <div>
          <h1>Featured Ideas</h1>
          <ul>
            {savedIdeas.map((idea) => (
              <li key={idea._id}>
                <div>
                  <h2>{savedIdea.topic}</h2>
                </div>
                <div className="idea-content">
                  <p>{savedIdeas.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default FeaturedIdeas
