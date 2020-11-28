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
            {/* Project 8 */}
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
                                "url(https://res.cloudinary.com/angelrodriguez/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1606569957/wiki_homepage.png) center / cover",
                        }}
                    />
                    <CardText
                        style={{
                            color: "black",
                            fontSize: "20px",
                            paddingBottom: "8px",
                        }}
                    >
                        Wiki
          </CardText>
                    <CardText>
                        <p>Project from CS50’s Web Programming with Python and JavaScript. One Markdown file represents each encyclopedia entry. Markdown files are then converted to HTML with the markdown2 library.{" "}</p>
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/angelr1076/wiki"
                            >
                                Github
              </a>
                        </Button>
                        <Button colored>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://angel107rodriguez.eu.pythonanywhere.com"
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
