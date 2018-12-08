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
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1541199159/Screen_Shot_2018-11-02_at_6.51.56_PM.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Portfolio Site</CardText>
                        <CardText>Portfolio site built in ReactJS showcasing all projects written in React, JavaScript, Rails and Sinatra.</CardText>
                        <CardActions border>
                            <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/react-portfolio">Github</a></Button>
                            <Button colored><a rel="noopener noreferrer" target="_blank" href="https://angelroddie.com">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                    {/* Project 2 */}
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                       <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1543806642/Screen_Shot_2018-12-02_at_10.09.05_PM.png) center / cover'}}></CardTitle>
                       <CardText style={{color: 'black', fontSize: '20px'}}>Word-Spin</CardText>
                       <CardText>Word-Spin game that generates random JavaScript terminology. The user wins the game with ten correct answers in a row. The user cannot miss one word though, or he/she faces elimination.</CardText>
                       <CardActions border>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/word-spin">Github</a></Button>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://angelr1076.github.io/word-spin/">Live Demo</a></Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
                    </Card>
                    </Cell>
                    {/* Project 3 */}
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto',marginBottom: '20px'}}>
                       <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/map-attack.png) center / cover'}}></CardTitle>
                       <CardText style={{color: 'black', fontSize: '20px'}}>Map-Attack</CardText>
                       <CardText>Map-Attack uses the Goole Maps and REST Countries API. Both APIs work together by plotting out random points on the globe and generating random questions and multiple choice answers for the user to interact with during gameplay.</CardText>
                       <CardActions border>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/">Github</a></Button>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://map-attack-app.herokuapp.com/">Live Demo</a></Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
                    </Card>
                    </Cell>
                    {/* Project 5 */}
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                       <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1543937588/Local_Weather.png) center / cover'}}></CardTitle>
                       <CardText style={{color: 'black', fontSize: '20px'}}>Local Weather</CardText>
                       <CardText>Weather app using the OpenWeather API and geolocation displaying user's local weather and time based on location.</CardText>
                       <CardActions border>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/weather-js">Github</a></Button>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://angelr1076.github.io/weather-js/">Live Demo</a></Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
                    </Card>
                    </Cell>
                    {/* Project 6 */}
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1542052847/Screen_Shot_2018-11-12_at_2.56.04_PM.png) center / cover'}}></CardTitle>
                       <CardText style={{color: 'black', fontSize: '20px'}}>Bible Verses</CardText>
                       <CardText>JavaScript app uses the Mashape API to generate random bible verses from NKJV. Allows users to post verses they like on Twitter. The background color changes each time a new verse is fetched.</CardText>
                       <CardActions border>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/verses-fetch">Github</a></Button>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://angelr1076.github.io/verses-fetch/#">Live Demo</a></Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
                    </Card>
                    </Cell>
                    {/* Project 7 */}
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                       <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985056/mini-arcade.png) center / cover'}}></CardTitle>
                       <CardText style={{color: 'black', fontSize: '20px'}}>BRB Arcade</CardText>
                       <CardText>Arcade App Using PHASER API written in JavaScript and Rails. There is an option to choose from three games in the arcade.</CardText>
                       <CardText>Username: guest@gmail.com, Password: guestpass</CardText>
                       <CardActions border>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/arcade-mini-games">Github</a></Button>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://brb-arcade.herokuapp.com/">Live Demo</a></Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985057/star-shipped.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Star-Shipped</CardText>
                        <CardText>Shipped app written in Rails allowing the user to create ships, ship crates and create assignments to link ships to orders using ActiveRecord and Paperclip.</CardText>
                        <CardText>Username: guest@gmail.com, Password: guestpass</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/star-shipped">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://star-shipped.herokuapp.com/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/doggie-bloggie.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Doggie-Bloggie</CardText>
                        <CardText>Full Rails CRUD app built for dogs to gossip about their owners.</CardText>
                        <CardText>Username: guest, Password: guestpass</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/ruby-on-rails-crud-blog">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://doggie-bloggie.herokuapp.com/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={6}>
                    {/* Project 7 */}
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985056/ruby-flooring.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Ruby Flooring</CardText>
                        <CardText>Mock business website written in Sinatra. Has a Twitter-like character count feature written in JavaScript.</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/sinatra-business-website">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://ruby-flooring.herokuapp.com/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/coder-bytes.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Coder-Bytes</CardText>
                        <CardText>Full CRUD site written in Sinatra allowing users to setup user accounts, profiles, posts and comments.</CardText>
                        <CardText>Username: guest, Password: guestpass</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/coder-bytes-sinatra-crud-blog">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://coder-bytes.herokuapp.com/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1541199159/Screen_Shot_2018-11-02_at_6.51.56_PM.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Portfolio Site</CardText>
                        <CardText>Portfolio site built in ReactJS showcasing all projects written in React, JavaScript, Rails and Sinatra.</CardText>
                        <CardActions border>
                            <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/react-portfolio">Github</a></Button>
                            <Button colored><a rel="noopener noreferrer" target="_blank" href="https://angelroddie.com">Live Demo</a></Button>
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
                    {/* Project 2 */}
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1543806642/Screen_Shot_2018-12-02_at_10.09.05_PM.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Word-Spin</CardText>
                        <CardText>Word-Spin game that generates random JavaScript terminology. The user wins the game with ten correct answers in a row. The user cannot miss one word though, or he/she faces elimination.</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/word-spin">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://angelr1076.github.io/word-spin/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                     {/* Project 3 */}
                     <Cell col={6}>
                     <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto',marginBottom: '20px'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/map-attack.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Map-Attack</CardText>
                        <CardText>Map-Attack uses the Goole Maps and REST Countries API. Both APIs work together by plotting out random points on the globe and generating random questions and multiple choice answers for the user to interact with during gameplay.</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://map-attack-app.herokuapp.com/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                    {/* Project 5 */}
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1543937588/Local_Weather.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Local Weather</CardText>
                        <CardText>Weather app using the OpenWeather API and geolocation displaying user's local weather and time based on location.</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/weather-js">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://angelr1076.github.io/weather-js/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                    {/* Project 6 */}
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1542052847/Screen_Shot_2018-11-12_at_2.56.04_PM.png) center / cover'}}></CardTitle>
                       <CardText style={{color: 'black', fontSize: '20px'}}>Bible Verses</CardText>
                       <CardText>JavaScript app uses the Mashape API to generate random bible verses from NKJV. Allows users to post verses they like on Twitter. The background color changes each time a new verse is fetched.</CardText>
                       <CardActions border>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/verses-fetch">Github</a></Button>
                       <Button colored><a rel="noopener noreferrer" target="_blank" href="https://angelr1076.github.io/verses-fetch/#">Live Demo</a></Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
                    </Card>
                    </Cell>
                    {/* Project 7 */}
                    <Cell col={6}>
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985056/mini-arcade.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>BRB Arcade</CardText>
                        <CardText>Arcade App Using PHASER API written in JavaScript and Rails. There is an option to choose from three games in the arcade.</CardText>
                        <CardText>Username: guest@gmail.com, Password: guestpass</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/arcade-mini-games">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://brb-arcade.herokuapp.com/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Project  8 */}
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985057/star-shipped.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Star-Shipped</CardText>
                        <CardText>Shipped app written in Rails allowing the user to create ships, ship crates and create assignments to link ships to orders using ActiveRecord and Paperclip.</CardText>
                        <CardText>Username: guest@gmail.com, Password: guestpass</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/star-shipped">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://star-shipped.herokuapp.com/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 9 */}
                    <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/doggie-bloggie.png) center / cover'}}></CardTitle>
                        <CardText style={{color: 'black', fontSize: '20px'}}>Doggie-Bloggie</CardText>
                        <CardText>Full Rails CRUD app built for dogs to gossip about their owners.</CardText>
                        <CardText>Username: guest, Password: guestpass</CardText>
                        <CardActions border>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/ruby-on-rails-crud-blog">Github</a></Button>
                        <Button colored><a rel="noopener noreferrer" target="_blank" href="https://doggie-bloggie.herokuapp.com/">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div className="projects-grid">
                {/* Project 7 */}
                <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985056/ruby-flooring.png) center / cover'}}></CardTitle>
                    <CardText style={{color: 'black', fontSize: '20px'}}>Ruby Flooring</CardText>
                    <CardText>Mock business website written in Sinatra. Has a Twitter-like character count feature written in JavaScript.</CardText>
                    <CardActions border>
                    <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/sinatra-business-website">Github</a></Button>
                    <Button colored><a rel="noopener noreferrer" target="_blank" href="https://ruby-flooring.herokuapp.com/">Live Demo</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{height: '400px', minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
                    <CardTitle style={{color: 'white', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/coder-bytes.png) center / cover'}}></CardTitle>
                    <CardText style={{color: 'black', fontSize: '20px'}}>Coder-Bytes</CardText>
                    <CardText>Full CRUD site written in Sinatra allowing users to setup user accounts, profiles, posts and comments.</CardText>
                    <CardText>Username: guest, Password: guestpass</CardText>
                    <CardActions border>
                    <Button colored><a rel="noopener noreferrer" target="_blank" href="https://github.com/angelr1076/coder-bytes-sinatra-crud-blog">Github</a></Button>
                    <Button colored><a rel="noopener noreferrer" target="_blank" href="https://coder-bytes.herokuapp.com/">Live Demo</a></Button>
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
                    <Tab style={{ color: 'white' }}>All</Tab>
                    <Tab style={{ color: 'white' }}>React</Tab>
                    <Tab style={{ color: 'white' }}>JavaScript</Tab>
                    <Tab style={{ color: 'white' }}>Rails</Tab>
                    <Tab style={{ color: 'white' }}>Sinatra</Tab>
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