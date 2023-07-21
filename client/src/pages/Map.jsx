import Client from "../services/api"
import { BASE_URL } from "../services/api"
import { useState, useEffect } from "react"
import axios from "axios"

const Map = () => {
  const [formValues, setFormValues] = useState({
    promptOne: "",
    promptTwo: "",
    promptThree: "",
    promptFour: "",
    promptFive: "",
  })

  const [maps, setMaps] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await Client.post("/maps/new", formValues)
    setMaps([...maps, res.data])
    setFormValues({
      promptOne: "",
      promptTwo: "",
      promptThree: "",
      promptFour: "",
      promptFive: "",
    })
  }

  const handleOneChange = (e) => {
    setFormValues({ ...formValues, promptOne: e.target.value })
  }
  const handleTwoChange = (e) => {
    setFormValues({ ...formValues, promptTwo: e.target.value })
  }
  const handleThreeChange = (e) => {
    setFormValues({ ...formValues, promptThree: e.target.value })
  }
  const handleFourChange = (e) => {
    setFormValues({ ...formValues, promptFour: e.target.value })
  }
  const handleFiveChange = (e) => {
    setFormValues({ ...formValues, promptFive: e.target.value })
  }

  const handleDelete = async (id) => {
    await Client.delete(`/maps/${id}`)
    setMaps(maps.filter((map) => map._id !== id))
  }

  useEffect(() => {
    const getMaps = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/maps/all`)
        if (res && res.data) {
          console.log(res.data)
          setMaps(res.data)
        } else {
          console.log("server error")
        }
      } catch (error) {
        console.log(error)
      }
    }
    getMaps()
  }, [])
  return (
    <div>
      <h1>This is the Map Page</h1>
      <div>
        <div className="form-wrapper one">
          <h1>Add Map</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="promptOne">1. Lorem ...... </label>
            <input
              placeholder="Prompt One"
              id="promptOne"
              onChange={handleOneChange}
              value={formValues.promptOne}
            />
            <label htmlFor="promptTwo">2. Lorem ...... </label>
            <input
              placeholder="Prompt Two"
              id="promptTwo"
              onChange={handleTwoChange}
              value={formValues.promptTwo}
            />
            <label htmlFor="promptThree">3. Lorem ...... </label>
            <input
              placeholder="Prompt Three"
              id="promptThree"
              onChange={handleThreeChange}
              value={formValues.promptThree}
            />
            <label htmlFor="promptFour">4. Lorem ...... </label>
            <input
              placeholder="Prompt Four"
              id="promptFour"
              onChange={handleFourChange}
              value={formValues.promptFour}
            />
            <label htmlFor="promptFive">5. Lorem ...... </label>
            <input
              placeholder="Prompt Five"
              id="promptFive"
              onChange={handleFiveChange}
              value={formValues.promptFive}
            />
            <button type="submit">Add Map</button>
          </form>
        </div>
        <section className="new-course-card">
          {maps.map((map) => (
            <div key={map._id}>
              <h4>
                {map.promptOne} {map.promptTwo} {map.promptThree}
                {map.promptFour} {map.promptFive}
              </h4>
              <button onClick={() => handleDelete(map._id)}>Delete Map</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Map
