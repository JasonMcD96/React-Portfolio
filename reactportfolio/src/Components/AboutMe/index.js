import React from "react"
import self from "./self.jpg"

function AboutMe() {

    return (
        <div>
            <main className="middlePage">
                <div id="aboutMe" className="container">
                    <div className="row">
                        <div className="col">
                            <h1>About Me</h1>
                        </div>
                        <hr />

                    </div>
                    <div className="row">
                        <div className="col">
                            <div id="bio">
                                <div className="col-md-3 col-sm-6">
                                    <img className="img-thumbnail float-left" alt="me" id="aboutMeImage" src={self} />
                                </div>
                                <p id="bioText">
                                    My name is Jason McDonald, I have a Bachelors Degree in Computer Science
                                    from the University of Texas at San Antonio. Some of my skills include working
                                    with languages such as C, Java, and Python. Recently I have started studying web
                                    development and I have really enjoy it. I hope to learn a lot in the coming months.
                                <br /><br />

                                    In my spare time I work on classic cars with my dad. He gave me an old pickup truck when
                                    I was
                                    in high school and since then we have been restoring it along with 2 other vehicles and
                                    a camper
                                    trailer. When I'm not working on cars with my dad though I'm inside playing video games,
                                    watching movies,
                                    or calling my friends asking them if they want to go eat somewhere.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AboutMe