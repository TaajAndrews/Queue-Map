import { useState } from "react"

const SigninForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
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
