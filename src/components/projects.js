import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540984748/react-website.png) center / cover'}}>My Portfolio Site</CardTitle>
                            <CardText>Portfolio site built in ReactJS showcasing all projects written in React, JavaScript, Rails and Sinatra.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                     {/* Project 2 */}
                     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985058/word-spin.png) center / cover'}}>Word-Spin</CardTitle>
                            <CardText>Word-Spin game written in pure JavaScript that generates random JavaScript terminology that the user has 6 chances to guess.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>
                     {/* Project 3 */}
                     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/map-attack.png) center / cover'}}>Map-Attack</CardTitle>
                            <CardText>Map-Attack is a game written in pure JavaScript. The game uses the Fetch/Google Maps and Rest Countries APIs.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>
                     {/* Project 4 */}
                     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985056/mini-arcade.png) center / cover'}}>BRB Arcade</CardTitle>
                            <CardText>Arcade App Using PHASER API written in JavaScript and Rails. There is an option to choose from three games in the arcade.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>
                    {/* Project 5 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985057/weather.png) center / cover'}}>Local Weather</CardTitle>
                            <CardText>Weather app using the OpenWeather API and geolocation displaying user's local weather and time based on location.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>
                    {/* Project 6 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1532199115/bible.png) center / cover'}}>Bible Verses</CardTitle>
                            <CardText>jQuery app using the Mashape API to generate random bible verses from NKJV. Allows users to post verses they like on Twitter.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 7 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985057/star-shipped.png) center / cover'}}>Star-Shipped</CardTitle>
                            <CardText>Shipped app written in Rails allowing the user to create ships, ship crates and create assignments to link ships to orders.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>
                    {/* Project 6 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/doggie-bloggie.png) center / cover'}}>Doggie-Bloggie</CardTitle>
                            <CardText>Full Rails CRUD app built for dogs to gossip about their owners.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                {/* Project 7 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985056/ruby-flooring.png) center / cover'}}>Ruby Flooring</CardTitle>
                        <CardText>Mock business website written in Sinatra. Has a Twitter-like character count feature written in JavaScript.</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/coder-bytes.png) center / cover'}}>Coder-Bytes</CardTitle>
                        <CardText>Full CRUD site written in Sinatra allowing users to setup user accounts, profiles, posts and comments.</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Rails</Tab>
                    <Tab>Sinatra</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;