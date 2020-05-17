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
            <i className="devicon-ruby-plain-wordmark colored" />
            <i className="devicon-rails-plain-wordmark colored" />
            <i className="devicon-bootstrap-plain-wordmark colored" />
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
              the way that they did. My parents would laugh at how I would take
              all of my toys or devices apart and, sometimes, manage to put them
              back together. In doing this, I didn't always figure it out, but
              it helped me become a better problem-solver when it came to
              approaching problems and breaking things down into smaller pieces.
            </p>

            <p>
              In mid-2018, after teaching myself HTML, CSS and some JavaScript,
              I decided to take a deeper dive into development by enrolling in a
              web intensive boot-camp. This turned out to be the best investment
              in myself that I have ever made.
            </p>

            <p>
              My passion has always been to create new products that are useful
              to others; programming, in all of its facets, is one of the best
              ways for me to accomplish this by solving people’s day-to-day
              problems and making their jobs a bit simpler.
            </p>

            <p>
              It has been said that you should have hobbies outside of work. I
              do agree with that, but I also agree that if you enjoy work
              enough, it's almost a hobby in itself. I love to cook, spend time
              with my family and my pets, and I also love to learn in my spare
              time. I'm currently taking Harvard's CS50 course, learning C and
              sharpening my JavaScript skills by writing more algorithms in JS.
            </p>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
