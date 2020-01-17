import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={6} tablet={12}>
          <div className="banner-text">
            <h1 style={{ textAlign: "center", fontWeight: "600" }}>
              Angel Rodriguez
            </h1>
            <h3 style={{ textAlign: "center", fontWeight: "500" }}>
              Software Developer/Consultant
            </h3>
            <h4 style={{ textAlign: "center" }}>Philadelphia, PA</h4>
          </div>
          <div className="social-links">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/angelrodriguezlead/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a
              href="https://github.com/angelr1076"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/AngelRoddy7"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </a>
            {/* Email */}
            <a
              href="mailto:angelr1076@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-envelope-square" aria-hidden="true" />
            </a>
          </div>

          <hr />
          <div className="devicons">
            <i className="devicon-javascript-plain colored" />
            <i className="devicon-jquery-plain-wordmark colored" />
            {/* <i className="devicon-nodejs-plain colored" /> */}
            {/* <i className="devicon-react-original-wordmark" /> */}
            <i className="devicon-ruby-plain-wordmark colored" />
            <i className="devicon-rails-plain-wordmark colored" />
            <i className="devicon-bootstrap-plain-wordmark colored" />
            <i className="devicon-html5-plain-wordmark colored" />
            <i className="devicon-css3-plain-wordmark colored" />
            <i className="devicon-github-plain-wordmark colored" />
            <i className="devicon-gitlab-plain-wordmark colored" />
            <i className="devicon-heroku-original-wordmark colored" />
            {/* <i className="devicon-amazonwebservices-original colored" /> */}
          </div>
        </Cell>

        <Cell col={6} tablet={12}>
          <div
            className="landing-bio"
            style={{
              textAlign: "justify",
              width: "75%",
              margin: "12%",
            }}
          >
            <p>
              I have always had an amateur interest in technology. Early in
              life, I went down a career path I thought I loved but eventually
              became disengaged from it.
            </p>

            <p>
              I decided to take a deep dive into development by enrolling in a
              web intensive boot-camp in mid-2018, which turned out to be the
              best investment in myself that I have ever made. My passion has
              always been to create new products that are useful to others; tech
              is one of the best ways for me to accomplish this by solving
              people’s day-to-day problems.
            </p>

            <p>
              I am always fascinated by the power that planning, collaborating
              and programming harnesses in development. I don't ever see myself
              losing the curiosity and excitement of writing my first several
              lines of code.
            </p>

            <p>
              If you have questions for me or perhaps some advice, please don't
              hesitate to contact me. I would love to hear from you!
            </p>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
