import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"

import Hero from "../components/Homepage/Hero"
import Profile from "../components/Homepage/Profile"
import ProjectList from "../components/Homepage/ProjectList"

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Profile></Profile>
      <ProjectList></ProjectList>
    </Layout>
  )
}

