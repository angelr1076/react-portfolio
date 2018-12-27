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

                    <p className="contact-closing" style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Front-end web developer with a passion for design and problem-solving. Please contact me if you have any questions or comments. Aside from programming, I love to spend time with my wife, read and cook.</p>
                    <hr></hr>
                    <p className="skills" style={{ width: '90%', padding: '3px', margin: 'auto' }}>Programming: JavaScript, jQuery, React, JSON, SQLite3, Ruby on Rails, Sinatra, HTML5 and CSS3
                    </p>

                    <p className="skills" style={{ width: '90%', padding: '3px', margin: 'auto' }}>Software: Heroku, Firebase, Hugo, Bootstrap, Git and Github
                    </p>

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