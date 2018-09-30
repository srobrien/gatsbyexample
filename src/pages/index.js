import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my blog site.</p>
    <p>It's just the best, I'm so interesting.</p>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
