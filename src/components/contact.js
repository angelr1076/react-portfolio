import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Angel Rodriguez</h2>
                    <img 
                        src="https://res.cloudinary.com/angelrodriguez/image/upload/v1528903608/261905_157517620988095_7963288_n.jpg"
                        alt="avatar"
                        style={{ width: '80%', height: 'auto' }}
                    />

                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I'm a web developer with a passion for front and back-end design. I've worked with: JavaScript, React, jQuery, Sass, AWS, ActiveRecord, Node.js, JSON, Phaser3, Tiled, SQLite3, Ruby, Ruby on Rails, Sinatra, Heroku, Firebase, Hugo, Bootsrap, Materialize, HTML5, CSS3, Git and Github. Please contact me if you have any questions or advice. My contact information is listed on this page so you can get a hold of me any way you'd like.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div style={{ width: '100%', margin: 'auto' }} className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                858.232.3288
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                angelr1076@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white' }}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                <a href="https://www.linkedin.com/in/angelrodriguezlead/" rel="noopener noreferrer" target="_blank">linkedIn</a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                <i className="fa fa-github" aria-hidden="true"/>
                                <a href="https://github.com/angelr1076" rel="noopener noreferrer" target="_blank">Github</a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                <i className="fa fa-sticky-note" aria-hidden="true"/>
                                <a href="https://angelroddy.com" rel="noopener noreferrer" target="_blank">My Blog</a>
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;