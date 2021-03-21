import React from "react"

function Contact() {

    return (
    <div>
        <main className="middlePage">
            <div id="contact" className="container">

                <div className="row">
                    <div className="col">
                        <h1>Contact</h1>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col contactLine">
                        <h4>Mobile Number: </h4>
                        <h5>210-232-0378</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col contactLine">
                        <h4>Send Me an Email: </h4>
                        <h5>jasonmcd65@gmail.com</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col contactLine">
                        <h4>Sites you can find me: </h4>
                        <a href="https://github.com/JasonMcD96" target="_blank">
                            <h5>Github</h5>
                        </a>
                        <a href="https://www.linkedin.com/in/jason-mcdonald-ab50991b8/" target="_blank">
                            <h5>LinkedIn</h5>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col contactLine">
                        <h4>Documents:</h4>
                        <a href="assets/McDonald_Jason_Resume.pdf" target="_blank">
                            <h5>My Resume</h5>
                        </a>
                    </div>
                </div>

            </div>
        </main>
    </div>)
}

export default Contact