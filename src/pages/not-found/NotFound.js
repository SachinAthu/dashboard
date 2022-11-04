import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NotFound() {
  const location = useLocation();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Not Found - <code>{ location.pathname }</code></h1>
      <br />
      <Link to="/">Dashboard</Link>
    </div>
  )
}

export default NotFound