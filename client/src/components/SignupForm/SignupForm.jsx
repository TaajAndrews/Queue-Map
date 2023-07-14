import { useState } from "react"
import axios from "axios"

const SignupForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post("http://localhost:3001/auth/signup", formState)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
    // const disable =
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        onChange={handleChange}
        value={formState.username}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        onChange={handleChange}
        value={formState.email}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        onChange={handleChange}
        value={formState.password}
        required
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        onChange={handleChange}
        value={formState.confirmPassword}
        required
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default SignupForm
