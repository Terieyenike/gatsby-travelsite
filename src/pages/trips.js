import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Trips from "../components/Trips/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import "../components/layout.css"
import Email from "../components/Email"

const TripsPage = () => (
  <Layout>
    <SEO title="Discover new Trips" />
    <Hero />
    <Trips heading={"our favourite destinations"} />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default TripsPage
