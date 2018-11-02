import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div className="landing-body">
                <Grid className="landing-grid">
                    <Cell col={6}>
                    <div className="banner-text"></div>
                        <h1>Angel Rodriguez</h1>
                        <h2>Full Stack Web Developer</h2>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/angelrodriguezlead/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/angelr1076" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com/AngelRoddy7" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>
                        </div>

                        <hr/>
                        
                        <div className="devicons">
                            <i className="devicon-javascript-plain colored" />
                            <i className="devicon-jquery-plain-wordmark colored" />
                            <i className="devicon-react-original colored" />
                            <i className="devicon-ruby-plain-wordmark colored" />
                            <i className="devicon-rails-plain-wordmark colored" />
                            <i className="devicon-bootstrap-plain-wordmark" />
                            <i className="devicon-html5-plain-wordmark colored" />
                            <i className="devicon-css3-plain-wordmark colored" />
                            <i className="devicon-sass-original colored" />
                            <i className="devicon-visualstudio-plain-wordmark" />
                            <i className="devicon-nodejs-plain" />
                            <i className="devicon-amazonwebservices-plain-wordmark" />
                            <i className="devicon-heroku-original-wordmark colored" />
                            <i className="devicon-github-plain-wordmark" />
                        </div>
                        <p>JavaScript | jQuery | React | Sass | ActiveRecord | Node.js | JSON | Phaser3 | Tiled | SQLite3| Ruby | Ruby on Rails | Sinatra | Heroku | Firebase | Hugo | Bootsrap | Materialize | HTML5 | CSS3 | Git | Github</p>
                    </Cell>

                    <Cell col={6}>
                        <div className="landing-bio">
                            <p style={{width: '75%', margin: '10px', paddingTop: '1em'}}>Hello, my name's Angel! Thanks for checking out my website! After years in the food service industry, I decided to follow my true passion of building things, breaking them, and rebuilding the things I broke only to make them better! A little over a year ago, I decided I needed a drastic change in my life. I came to realize the food industry I once loved so much was never truly my number one passion.</p>

                            <p style={{width: '75%', margin: '10px', paddingTop: '1em'}}>I've always been fascinated by tech, in some shape or form. Whether it was building a menu on my laptop, running price changes in a database or livening up a personal website with some HTML. I have been coding for over a year now, and recently, I decided to take a deep dive into a web/software development bootcamp. I realized this was one of the greatest decisions I have ever made. It was also the best investment I could ever make in myself. My passion has always truly been problem solving and tech is one of the best ways to exercise these skills. Yes, programming can be difficult -- it can test your will and your spirit. However, I feel that programming has also shown me what I'm truly made of and how much I can accomplish if I don't give up and simply keep learning and improving my craft.</p> 

                            <p style={{width: '75%', margin: '10px', paddingTop: '1em'}}>I don't have a preference from back or front-end work. I enjoy both and my approach to either one is that I will learn more as I handle each end. I have also worked in training many people on the job, so I'm no stranger to dealing with a vast array of personalities.</p> 

                            <p style={{width: '75%', margin: '10px', paddingTop: '1em'}}>If you feel that I could be a good fit at your company, please call or email me.</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
    
export default Landing;