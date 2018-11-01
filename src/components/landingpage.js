import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src="https://res.cloudinary.com/angelrodriguez/image/upload/c_crop,h_200,w_200,x_105,y_170/v1528903608/261905_157517620988095_7963288_n.jpg" 
                        alt="avatar-pic"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h2>Angel Rodriguez</h2>
                        <h1>Full Stack Web Developer</h1>

                        <hr/>

                        <p>JavaScript | jQuery | React | Sass | ActiveRecord | Node.js | JSON | Phaser3 | Tiled | SQLite3| Ruby | Ruby on Rails Sinatra | Heroku | Firebase | Hugo | Bootsrap | Materialize | HTML5 | CSS3 | Git | Github</p>

                        <div className="social-links">

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/angelrodriguezlead/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        
                        {/* Github */}
                        <a href="https://github.com/angelr1076" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* Medium */}
                        <a href="https://medium.com/@angelr1076" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-medium" aria-hidden="true" />
                        </a>

                        {/* Twitter */}
                        <a href="https://twitter.com/AngelRoddy7" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter-square" aria-hidden="true" />
                        </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default Landing;