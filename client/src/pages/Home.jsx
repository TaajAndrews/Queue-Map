import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Client from "../services/api"
import { useGetUserToken } from "../hooks/useGetUserToken"
// import { useCookies } from "react-cookie"
import Ideas from "../pages/Ideas"

const Home = ({ user }) => {
  let navigate = useNavigate()

  const [ideas, setIdeas] = useState([])
  const [savedIdeas, setSavedIdeas] = useState([])
  // const [cookies, _] = useCookies(["access_token"])

  const userID = useGetUserToken()

  useEffect(() => {
    const fetchIdeas = async () => {
      console.log("ideas")
      try {
        let res = await Client.get("/ideas", ideas)
        setIdeas(res.data)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchSavedIdeas = async () => {
      try {
        let res = await Client.get(`/ideas/savedIdeas/ids/${userID}`)
        setSavedIdeas(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchIdeas()
    // fetchSavedIdeas()
  }, [])

  const saveIdea = async (ideaID) => {
    try {
      let res = await Client.put(
        "/ideas",
        { ideaID, userID },
        // { headers: { authorization: cookies.access_token } },
        ideas
      )
      setIdeas(res.data.savedIdeasÍ)
      console.log(res.data.savedIdeas)
    } catch (error) {
      console.log(error)
    }
  }

  // const isFeatured = (id) => savedIdeas?.includes(id)

  return (
    <div className="home-container col">
      <section className="welcome-signin">
        <button onClick={() => navigate("/signin")}>Sign In</button>
        <div>
          <h1 className="navbar short">Ideas</h1>
          <ul>
            {ideas.map((idea) => (
              <li className="form-wrapper idea-index" key={idea._id}>
                <div>
                  <h2>{idea.topic}</h2>
                  <p>{idea.content}</p>
                  {/* <button
                    onClick={() => saveIdea(idea._id)}
                    disabled={isFeatured(idea._id)}
                  >
                    {isFeatured(idea._id) ? "Featured" : "Feature"}
                  </button> */}
                </div>
                <div className="idea-content">
                  <p>{idea.keywords}</p>
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
