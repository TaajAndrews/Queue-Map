import { useState } from "react"
import { SigninUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"

const SigninForm = ({ setuser }) => {
  let navigate = useNavigate()
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const payload = await SigninUser(formState)
    setFormState({ email: "", password: "" })
    setuser(payload)
    navigate("/ideas")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={formState.email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={formState.password}
          required
        />
        <button
          type="submit"
          disabled={!formState.email || !formState.password}
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SigninForm
