import React from "react"

function Navbar() {

    return(
        <div>
            <nav id="myNavbar" className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">
                <p id="myName">Jason McDonald</p>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">About Me<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>

                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;