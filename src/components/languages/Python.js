import React from "react";
import {
    Cell,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
    CardMenu,
} from "react-mdl";
import "../Projects.css";

const Python = () => {
    return (
        <div className="projects-grid">
            <Cell col={6}>
                <Card
                    shadow={5}
                    style={{
                        height: "400px",
                        margin: "auto",
                        marginBottom: "20px",
                    }}
                >
                    <CardTitle
                        style={{
                            color: "black",
                            minHeight: "176px",
                            background:
                                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1606569957/mibrary_image.png) center / cover",
                        }}
                    />
                    <CardText
                        style={{
                            color: "black",
                            fontSize: "20px",
                            paddingBottom: "8px",
                        }}
                    >
                        Mibrary
          </CardText>
                    <CardText>
                        <p>Final assignment/project written in Django to complete CS50X. This project is a culmination of the final few projects from the web track. Username: guest@gmail.com, Password: guestpass</p>
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/angelr1076/django-mibrary"
                            >
                                Github
              </a>
                        </Button>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://mibrary-library.herokuapp.com/members/loginuser/"
                            >
                                Live Demo
              </a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }} />
                </Card>
            </Cell>
            <Cell col={6}>
                <Card
                    shadow={5}
                    style={{
                        height: "400px",
                        margin: "auto",
                        marginBottom: "20px",
                    }}
                >
                    <CardTitle
                        style={{
                            color: "black",
                            minHeight: "176px",
                            background:
                                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1610411667/cs50_commerce_project/bidscreen.png) center / cover",
                        }}
                    />
                    <CardText
                        style={{
                            color: "black",
                            fontSize: "20px",
                            paddingBottom: "8px",
                        }}
                    >
                        Bidstrocity
          </CardText>
                    <CardText>
                        <p>Ecommerce site assignment from CS50’s Web Programming with Python and JavaScript. User's can create accounts, create listings, bid on listings and save items to their watchlist.</p>
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/angelr1076/commerce"
                            >
                                Github
              </a>
                        </Button>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://commerce-django.herokuapp.com/"
                            >
                                Live Demo
              </a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }} />
                </Card>
            </Cell>
            <Cell col={6}>
                <Card
                    shadow={5}
                    style={{
                        height: "400px",
                        margin: "auto",
                        marginBottom: "20px",
                    }}
                >
                    <CardTitle
                        style={{
                            color: "black",
                            minHeight: "176px",
                            background:
                                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1624728537/cct_screenshot_for_portfolio.png) center / cover",
                        }}
                    />
                    <CardText
                        style={{
                            color: "black",
                            fontSize: "20px",
                            paddingBottom: "8px",
                        }}
                    >
                        CS50 Case Crime Trace
          </CardText>
                    <CardText>
                        <p>CCT utilizes Django on the back-end and HTML, CSS, and JavaScript on the front-end. The app allows users to report crimes and suspects in any given area of the U.S. The final project for CS50 Web.</p>
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/angelr1076/django_cct"
                            >
                                Github
              </a>
                        </Button>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://casecrimetrace-django.herokuapp.com/"
                            >
                                Live Demo
              </a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }} />
                </Card>
            </Cell>
                        <Cell col={6}>
                <Card
                    shadow={5}
                    style={{
                        height: "400px",
                        margin: "auto",
                        marginBottom: "20px",
                    }}
                >
                    <CardTitle
                        style={{
                            color: "black",
                            minHeight: "176px",
                            background:
                                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1615755432/network.png) center / cover",
                        }}
                    />
                    <CardText
                        style={{
                            color: "black",
                            fontSize: "20px",
                            paddingBottom: "8px",
                        }}
                    >
                        CS50 Network
          </CardText>
                    <CardText>
                        <p>Network class assignment from CS50’s Web Programming course. Designed a Twitter-like social network website for making posts and following users using Python, JavaScript, HTML, and CSS.</p>
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/angelr1076/CS50-Network"
                            >
                                Github
              </a>
                        </Button>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://cs50djangonetwork.herokuapp.com/"
                            >
                                Live Demo
              </a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }} />
                </Card>
            </Cell>
        </div>
    );
};

export default Python;
