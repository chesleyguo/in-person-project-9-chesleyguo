function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Me</h1>

      <section className="about-intro">
        <div className="about-content">
          <img
            src="/images/profile.jpg"
            alt="Chesley Guo"
            className="profile-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x300?text=Profile'
            }}
          />
          <div className="about-text">
            <h2>Hello! I'm Chesley Guo</h2>
            <p>
              I'm a student at UC Berkeley passionate about software engineering,
              interactive web applications, and artificial intelligence.
            </p>
            <p>
              I enjoy building modern, accessible, and data-driven web applications
              at the intersection of design and intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-categories">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React & React Router</li>
              <li>CSS3 & Layouts</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend & Data</h3>
            <ul>
              <li>Python & Data</li>
              <li>Node.js & APIs</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Vite</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <h2>My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2026</div>
            <div className="timeline-content">
              <h3>AI Study Assistant & Berkeley Blue UI Kit</h3>
              <p>AI-powered study planning and an accessible component library</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h3>Cal Campus Hub & Climate Viz Dashboard</h3>
              <p>Full-stack campus dashboard and interactive climate data visualization</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage