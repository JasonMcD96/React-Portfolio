import React from "react"
import PortfolioItem from "../PorfolioItem"
import projects from "./projects.json"

function Portfolio() {

    return (<div>
        <main className="middlePage">
            <div id="portfolio" className="container">
                <div className="row">
                    <div className="col">
                        <h1>Portfolio</h1>
                    </div>
                </div>
                <hr />

                <div className="row align-items-center text-center">
                    {projects.map(project => (

                        <PortfolioItem 
                        key={Math.random()}
                        title={project.title}
                        github={project.github}
                        deploy={project.deploy}
                        img={project.img}
                        />
                    ))}
                </div>
            </div>
        </main>
    </div>)
}

export default Portfolio