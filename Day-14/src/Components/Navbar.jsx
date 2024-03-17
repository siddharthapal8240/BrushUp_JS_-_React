// import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="mr-6">
          <a href="/">Home</a>
        </li>
        <li className="mr-6">
          <a href="/about">About</a>
        </li>
        <li className="mr-6">
          <a href="/services">Services</a>
        </li>
        <li className="mr-6">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
