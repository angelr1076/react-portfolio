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
                            <CardText>Word-Spin game written in pure JavaScript. The game generates random JavaScript terminology that the user has 6 chances to guess. Guess 10 words correctly and you win the game.</CardText>
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
                        <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/map-attack.png) center / cover'}}>Map-Attack</CardTitle>
                            <CardText>Map-Attack is a game written in pure JavaScript. The game uses the Fetch/Google Maps and Rest Countries APIs all working in unison. Map-Attack generates questions based on the random country chosen from the Rest Countries API. The user has three chances to save the world. If the user destroys three countries by choosing the wrong answer, the game is over. If the user chooses five countries correctly, he/she saves the world.</CardText>
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
                            <CardText>Arcade App Using PHASER API written in JavaScript and Rails.</CardText>
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
                <div><h1>This is Rails</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is Sinatra</h1></div>
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