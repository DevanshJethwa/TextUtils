import React from 'react'
// import { Link } from 'react-router-dom'

function Navbar(props) {
    
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode ? "light" : "dark"}`}>
    <div className="container-fluid">
      <a className={`navbar-brand text-${props.mode ? "dark" : "light"}`} href="#">
        Textutils
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link active text-${props.mode ? "dark" : "light"} `} aria-current="page" href="/">
              Home
            </a>
          </li>
          {/* <li className="nav-item">
            <a className={`nav-link active text-${props.mode ? "dark" : "light"}`} href="about">
              About us
            </a>
          </li> */}
        </ul>
        <div class="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            onChange={props.toggle} />
          <label
            className={`form-check-label me-3 text-${props.mode ? "dark" : "light"}`}
            for="flexSwitchCheckChecked" >
            Dark Mode
          </label>
        </div>
        
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar