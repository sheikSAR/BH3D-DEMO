import React from 'react'
import './index.css'
import Hero from './pages/Hero.jsx'
import Nav from './pages/Nav.jsx'
import Content from './pages/Content.jsx'
import Mentors from './pages/Mentors'

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Content />
      <Mentors />
    </main>
  )
}

export default App
