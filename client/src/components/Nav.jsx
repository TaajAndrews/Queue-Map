import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="navbar">
        <h3>{user.email}</h3>
        <Link to="/ideas/all">IDEAS INDEX</Link>
        <Link to="/ideas/new">IDEAS</Link>
        <Link onClick={handleLogOut} to="/">
          SIGN OUT
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/register">REGISTER</Link>
      <Link to="/signin">SIGN IN</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo"></div>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
