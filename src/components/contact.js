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
                        style={{ height: '300px'}}
                    />

                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello! My name's Angel and I'm a web-developer with a passion for front-end design and back-end architecture. I've worked with many technological tools, including: JavaScript, jQuery, Sass, ActiveRecord, Node.js, JSON, Phaser3, Tiled, SQLite3, Ruby, Ruby on Rails, Sinatra, Heroku, Firebase, Hugo, Bootsrap, Materialize, HTML5, CSS3, Git and Github. Contact me if you like my work and would like to hire me. You can either email me at angelr1076@gmail.com or contact me on social media.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            {/* <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                123.456.7890
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-fax" aria-hidden="true"/>
                                123.456.7890
                                </ListItemContent>
                            </ListItem> */}
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                angelr1076@gmail.com
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