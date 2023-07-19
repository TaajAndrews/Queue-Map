import Client from "../services/api"
import { useState, useEffect } from "react"
import { BASE_URL } from "../services/api"
import axios from "axios"

const Ideas = () => {
  const [formValues, setFormValues] = useState({
    topic: "",
    content: "",
    keywords: "",
  })
  const [ideas, setIdeas] = useState([])
  const [editIdea, setEditIdea] = useState(null)
  const [edit, setEdit] = useState("")

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await Client.post("/ideas/new", formValues)
    setIdeas([...ideas, res.data])
    setFormValues({ topic: "", content: "", keywords: "" })
  }

  const handleIdeaEdit = (id) => {
    let editedIdea = ideas.find((idea) => idea._id === id)
    setEditIdea(id)
    setEdit(editedIdea.content)
  }

  const handleEdit = (e) => {
    setEdit(e.target.value)
  }

  const handleUpdate = async (id) => {
    let updatedIdea = {
      ...ideas.find((idea) => idea._id === id),
      content: edit,
    }
    await Client.put(
      `/ideas/$
    {id}`,
      updatedIdea
    )
    setIdeas(ideas.map((idea) => (idea._id === id ? updatedIdea : idea)))
    setEditIdea(null)
    setEdit("")
  }

  const handleDelete = async (id) => {
    await Client.delete(`/ideas/${id}`)
    setIdeas(ideas.filter((idea) => idea._id !== id))
  }

  useEffect(() => {
    let GetIdeas = async () => {
      let res = await axios.get(`${BASE_URL}/ideas/all`)
      setIdeas(res.data)
    }
    GetIdeas()
  }, [])

  return (
    <>
      <div>
        <div className="form-wrapper">
          <h1>Add an idea</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="topic">Topic</label>
            <input
              onChange={handleChange}
              name="topic"
              id="topic"
              type="text"
              value={formValues.topic}
            />
            <label htmlFor="content">Content</label>
            <input
              onChange={handleChange}
              name="content"
              id="content"
              type="textarea"
              value={formValues.content}
            />
            <label htmlFor="keywords">Keywords</label>
            <input
              onChange={handleChange}
              name="keywords"
              id="keywords"
              type="text"
              value={formValues.keywords}
            />
            <button type="submit">Add An Idea</button>
          </form>
        </div>
      </div>
      {/* <div>
        <section>
          {ideas.map((idea) => (
            <div key={idea._id}>
              <h4>{idea.content}</h4>
              <button onClick={() => handleDelete(idea._id)}>
                Delete Idea
              </button>
              <button onClick={() => handleEdit(idea._id)}>Edit Idea</button>
              {editIdea === idea._id && (
                <div>
                  <input onChange={handleEdit} value={edit} />
                  <button onClick={() => handleUpdate(idea._id)}>
                    Update Idea
                  </button>
                </div>
              )}
            </div>
          ))}
        </section>
      </div> */}
    </>
  )
}

export default Ideas
