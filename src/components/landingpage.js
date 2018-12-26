import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div className="landing-body">
                <Grid className="landing-grid">
                    <Cell col={6}>
                    <div className="banner-text">
                        <h1 className="name-header">Angel Rodriguez</h1>
                        <h3 className="dev-header">Front-End Web Developer</h3>
                        <h3 className="location-header">Philadelphia, PA</h3>
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
                            <i className="devicon-react-original-wordmark colored" />
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
                        </div>
                    </Cell>

                    <Cell col={6}>
                        <div className="landing-bio">
                            <p style={{width: '75%', margin: '5%'}}>Hi, and thanks for checking out my site! I'm a web developer that's passionate about growth, people and learning new things! In fact, since I've been coding, I can say there hasn't been a day that I haven't had the opportunity to learn something new. I chose programming as a way to solve problems and bring my ideas to life.</p>

                            <p style={{width: '75%', margin: '5%'}}>Prior to learning to code, I had so many ideas that I wanted to materialize, but I had no clue about where or how to begin. At the time when I discovered that you didn't have to have a degree in computer science to solve technical problems, I realized I could challenge myself, and others to bring concepts together by combining data through code. </p> 

                            <p style={{width: '75%',  margin: '5%'}}>When I have an idea that I'm able to sketch out, plan and bring to life to view and interact with, it is like no other feeling I've experienced in my prior work. It's such a gratifying feeling to create, break, and improve your own projects through code, and also learn from it in the process.</p>

                            <p style={{width: '75%', margin: '5%'}}>I would love the opportunity to speak with you if you have questions about my background or if you'd like to interview me and maybe talk about food or tech. Please browse around and view my "Resume" and "Projects" pages. You can also find some of my links on the "Contact" page.</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
    
export default Landing;