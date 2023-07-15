import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>{user.username}</h3>
        <Link to="/IdeaLandingPage">Ideas</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">Logo</Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
