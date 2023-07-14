import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/ideas">Ideas</Link>
        &nbsp; | &nbsp;
        <Link to="/ideas/new">New Ideas</Link>
      </nav>
    </header>
  )
}

export default Header
