import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignupUser } from "../services/Auth"

const SignupForm = () => {
  let navigate = useNavigate()
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await SignupUser({
      name: formState.username,
      email: formState.email,
      password: formState.password,
    })
    setFormState({
      username: "",
      email: "",
      password: "",
    })
    navigate("/signin")
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formState.username}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formState.email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formState.password}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          onChange={handleChange}
          value={formState.confirmPassword}
          required
        />
        <button
          type="submit"
          disabled={
            !formState.email ||
            (!formState.password &&
              formState.password === formState.confirmPassword)
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignupForm
