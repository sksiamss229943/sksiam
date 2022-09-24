import React from "react"
import "../styles/globas.css"

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
