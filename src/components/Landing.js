import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid" style={{ marginTop: "80px" }}>
        <Cell col={6} tablet={12}>
          <div className="banner-text">
            <h1 style={{ textAlign: "center", fontWeight: "600" }}>
              Angel Rodriguez
            </h1>
            <h3 style={{ textAlign: "center", fontWeight: "500" }}>
              Web Application Developer
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

            {/* Email */}
            <a
              href="mailto:angel107rodriguez@gmail.com"
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
            <i className="devicon-django-plain-wordmark colored"/>
            <i className="devicon-rails-plain-wordmark colored" />
            <i className="devicon-bootstrap-plain-wordmark colored" />
            <i className="devicon-postgresql-plain-wordmark colored" />
            <i className="devicon-visualstudio-plain colored" />
            <i className="devicon-html5-plain-wordmark colored" />
            <i className="devicon-css3-plain-wordmark colored" />
            <i className="devicon-github-plain-wordmark colored" />
            <i className="devicon-gitlab-plain-wordmark colored" />
            <i className="devicon-heroku-original-wordmark colored" />
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
              Growing up, I was always curious about how and why things worked
              the way that they did. As a youth, I would take many of my toys or
              devices apart and, sometimes, manage to put them back together.
              This helped me to become a much better problem-solver when it came
              to approaching problems and breaking things down into smaller
              pieces.
            </p>

            <p>
              In mid-2018, after learning HTML, CSS, and some JavaScript,
              I decided to take a deeper dive into web development by enrolling
              in a web intensive boot-camp. This turned out to be the best
              investment in myself that I have ever made.
            </p>

            <p>
              My passion has always been to create new products that are useful
              to others; programming, in all of its facets, allows me to
              accomplish this by solving people’s day-to-day problems and by also making
              their jobs less complicated.
            </p>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
