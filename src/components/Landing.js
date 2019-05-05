import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing-body">
        <Grid className="landing-grid">
          <Cell col={6} tablet={12}>
            <div className="banner-text">
              <h1 className="name-header">Angel Rodriguez</h1>
              <h3 className="dev-header">Software Developer/Consultant</h3>
              <h3 className="location-header">Philadelphia, PA</h3>
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
              <i className="devicon-nodejs-plain colored" />
              <i className="devicon-jquery-plain-wordmark colored" />
              <i className="devicon-react-original-wordmark colored" />
              <i className="devicon-webpack-plain colored" />
              <i className="devicon-babel-plain colored" />
              <i className="devicon-ruby-plain-wordmark colored" />
              <i className="devicon-rails-plain-wordmark colored" />
              <i className="devicon-bootstrap-plain-wordmark colored" />
              <i className="devicon-html5-plain-wordmark colored" />
              <i className="devicon-css3-plain-wordmark colored" />
              <i className="devicon-github-plain-wordmark" />
              <i className="devicon-gitlab-plain-wordmark colored" />
              <i className="devicon-gimp-plain" />
              <i className="devicon-heroku-original-wordmark colored" />
              <i className="devicon-postgresql-plain-wordmark colored" />
            </div>
          </Cell>

          <Cell col={6} tablet={12}>
            <div className="landing-bio">
              <p style={{ width: "75%", margin: "5%" }}>
                I've always been fascinated by tech. Like many people early on
                in life, I went down a career path I thought I loved but
                eventually became disengaged from it. I love to solve problems
                and coding gives me an outlet to come up with ideas and think
                logically to problem-solve at the same time.
              </p>

              <p style={{ width: "75%", margin: "5%" }}>
                I decided to take a deep dive into web development by joining an
                intensive boot-camp in mid-2018. It is the best investment in
                myself that I've ever made. My passion has always been to create
                new things that are useful to others; tech is one of the best
                ways for me to demonstrate this.
              </p>

              <p style={{ width: "75%", margin: "5%" }}>
                I'm always fascinated by the power that planning and coding
                harnesses in development and other facets of programming. I
                don't ever see myself losing the curiosity and excitement of
                writing my first several lines of code and the sheer
                exhilaration of understanding what exactly is going on under the
                hood with a simple console.log.
              </p>

              <p style={{ width: "75%", margin: "5%" }}>
                If you have questions or perhaps some advice, please do not
                hesitate to contact me! I would love to hear from you!
              </p>

              <p className="skills" style={{ width: "75%", margin: "5%", color: "rgb(199, 199, 42)" }}>
                JavaScript ES5 to ESNext, Node.js, jQuery, React, JSON,
                PostgreSQL, Ruby on Rails, Sinatra, Flexbox, CSS Grid, HTML5,
                CSS3, Heroku, Firebase, Netlify, AWS, Hugo, Webpack, Babel,
                FileMaker, Bootstrap, Git and Github
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
