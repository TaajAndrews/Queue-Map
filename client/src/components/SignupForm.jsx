import { useState } from "react"
import ( usenavigate ) from "react-router-dom"
import {RegisterUser} from "../servicesAuth"
import axios from "axios"

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  // Create error state
  // const initialErrorState = {
  //   error: "",
  // }

  // const [errorState, setErrorState] = useState(initialErrorState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post("http://localhost:3001/auth/signup", formState)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  // const handleDisable = (event) => {
  //   const disable = event.target.password !== event.target.confirmPassword
  //   return disable
  // }

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
