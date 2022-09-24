import { Link } from "gatsby"
import React from "react"

export const Navbar = () => {
  return (
    <>
      <nav className="grid grid-cols-1 lg:grid-cols-3">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="font-extrabold text-5xl md:text-4xl mb-4 md:m-0">
            Siam
          </h1>
        </Link>
        <div className="links md:mt-1 lg:mt-0">
          <Link to="/">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#contact">Contact</Link>
        </div>
        <div className="button mt-5 md:mt-3 lg:mt-0">
          <button>Let's Talk</button>
        </div>
      </nav>
    </>
  )
}
