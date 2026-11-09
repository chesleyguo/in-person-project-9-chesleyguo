import { Outlet } from 'react-router-dom'

function ProjectsLayout() {
  return (
    <div className="projects-layout">
      <h2 className="projects-layout-heading">📁 Project Showcase</h2>
      <Outlet />
    </div>
  )
}

export default ProjectsLayout
