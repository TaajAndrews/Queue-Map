import { useNavigate } from "react-router-dom"

const LandingPage = () => {
  let navigate = useNavigate()

  return (
    <div>
      <section>
        <button onClick={() => navigate("/signin")}>
          Click Here to Get Started
        </button>
      </section>
    </div>
  )
}

export default LandingPage
