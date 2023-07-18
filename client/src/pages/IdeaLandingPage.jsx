import Client from "../services/api"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../services/api"
import { Idea } from "../../../models"
import { useNavigate } from "react-router-dom"

const IdeaLandingPage = () => {
  let navigate = useNavigate()

  return (
    <div>
      <main>
        <h1>Idea Landing Page</h1>
        <section>
          <p>Section 1: Overview </p>
        </section>
        <section>
          <p>Section 2: Add idea </p>
          <button onClick={() => navigate("/ideas/new")}>
            Click Here To Add an Idea
          </button>
        </section>
        <section>
          <p>Section 3: View All Ideas </p>
          <button onClick={() => navigate("/ideas/index")}>
            Click Here To View All Ideas
          </button>
        </section>
      </main>
    </div>
  )
}

export default IdeaLandingPage
