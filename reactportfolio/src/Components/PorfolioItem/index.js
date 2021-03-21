import React from "react"

function PortfolioItem(props) {
    return (
        <div className="col-md-6 col-sm-12 portfolioItem">
            <h3>{props.title}</h3>
            <a href={props.github} target="_blank">
                <p>Github Repo</p>
            </a>
            <a href={props.deploy} target="_blank">
                <p>Deployed Application</p>
            </a>
            <img className="img-thumbnail portfolioImage " src={props.img}
                alt={props.alt} />

        </div>
    )
}

export default PortfolioItem