import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function HomePage() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting('Good morning')
    } else if (hour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good evening')
    }
  }, [])

  return (
    <div className="home-page">
      <section className="hero">
        <h1>{greeting}! I'm Chesley Guo</h1>
        <p className="hero-subtitle">
          UC Berkeley Student | Frontend & AI Developer
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get In Touch
          </Link>
        </div>
      </section>

      <section className="highlights">
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-icon">⚛️</span>
            <h3>Frontend Development</h3>
            <p>Interactive, accessible web applications with React</p>
          </div>
          <div className="skill-card">
            <span className="skill-icon">🤖</span>
            <h3>AI Applications</h3>
            <p>Bringing artificial intelligence into everyday tools</p>
          </div>
          <div className="skill-card">
            <span className="skill-icon">📊</span>
            <h3>Data-Driven Design</h3>
            <p>Turning data into clear, interactive visualizations</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage