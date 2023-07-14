import { useState } from "react"

const SignupForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [formState, setFormState] = useState(initialState)

  // const handleChange = (event) =>
  // const disable =

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirm-password" />
      <button type="submit">Send</button>
    </form>
  )
}

export default SignupForm
