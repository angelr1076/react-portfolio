import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={6}>
                    <img 
                        src="https://res.cloudinary.com/angelrodriguez/image/upload/v1528903608/4.jpg"
                        alt="avatar"
                        style={{ height: '500px', display: 'flex'}}
                    />
                    </Cell>
                    <Cell col={6}>
                        <hr/>
                    <div className="about-bio">
                        <p style={{width: '75%', margin: '10px', paddingTop: '1em'}}>Hello, my name's Angel! Thanks for checking out my website! After years in the food service industry, I decided to follow my true passion of building things, breaking them, and rebuilding the things I broke only to make them better! A little over a year ago, I decided I needed a drastic change in my life. I came to realize the food industry I once loved so much was never truly my number one passion.</p>

                        <p style={{width: '75%', margin: '10px', paddingTop: '1em'}}>I've always been fascinated by tech, in some shape or form. Whether it was building a menu on my laptop, running price changes in a database or livening up a personal website with some HTML. I have been coding for over a year now, and recently, I decided to take a deep dive into a web/software development bootcamp. I realized this was one of the greatest decisions I have ever made. It was also the best investment I could ever make in myself. My passion has always truly been problem solving and tech is one of the best ways to demonstrate problem solving skills. Yes, programming can be difficult; it can test your will and spirit. However, I feel it has shown me what I'm truly made of and how much I can accomplish if I don't give up and simply keep learning and working on new projects.</p> 

                        <p style={{width: '75%', margin: '10px', paddingTop: '1em'}}>I don't have a preference from back or front-end work. I enjoy both and my approach to either one is that I will learn more as I handle each end. I've worked in training many people on the job, so I'm no stranger to dealing with a vast array of personalities.</p> 

                        <p style={{width: '75%', margin: '10px', paddingTop: '1em'}}>If you feel that I could be a good fit at your company, please call or email me.</p>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
    
export default About;