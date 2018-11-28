import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div className="landing-body">
                <Grid className="landing-grid">
                    <Cell col={6}>
                    <div className="banner-text">
                        <h1>Angel Rodriguez</h1>
                        <h2>Full Stack Web Developer</h2>
                        <h3>Philadelphia, PA</h3>
                    </div>
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
                            <i className="devicon-git-plain-wordmark" />
                            <i className="devicon-gitlab-plain-wordmark colored" />
                            <p className="skills">JavaScript | jQuery | React | Sass | ActiveRecord | Node.js | JSON | Phaser3 | Tiled | SQLite3 | Ruby | Ruby on Rails | Sinatra | Heroku | Firebase | Hugo | Bootsrap | Materialize | HTML5 | CSS3 | Git | Github</p>
                        </div>
                    </Cell>

                    <Cell col={6}>
                        <div className="landing-bio">
                            <p style={{width: '75%', margin: '5%'}}>Hello, and thanks for checking out my website! I'm a web developer that is passionate about learning new things each and every day! In fact, since I've been coding a little over a year ago, I can say there hasn't been a day that I haven't had the opportunity to learn something new. I chose programming/web development as a way to solve problems.</p>

                            <p style={{width: '75%', margin: '5%'}}>Prior to learning to program, I had many ideas that I wanted to put into action, but I had no clue on where or how to begin. At the time when I discovered that you didn't have to have a degree in computer science to solve technical problems, I realized I could empower myself, and others to learn to bring ideas to life by chaining data together through code. </p> 

                            <p style={{width: '75%',  margin: '5%'}}>When I have an idea that I'm able to sketch out, plan and bring to life to view and interact with, it is like no other feeling I've experienced in my career in any other field. It's such a powerful, and empowering feeling to create, break, and improve your own projects through code, and also learn from doing that in the process.</p>
                            
                            <p style={{width: '75%',  margin: '5%'}}>Aside from programming, my creativity also extends to cooking. I love to put together recipes, cook then serve them to family and friends. </p>

                            <p style={{width: '75%', margin: '5%'}}>I would love the opportunity to speak with you if you have questions about my background or if you'd like to interview me and maybe talk about food or tech. Thanks again!</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
    
export default Landing;