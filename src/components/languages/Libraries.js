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

const Libraries = () => {
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
              color: "yellow",
              minHeight: "176px",
              background:
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1557097065/Portfolio.png) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Portfolio Site
          </CardText>
          <CardText>
            Portfolio site built in React showcasing all projects written in
            React, JavaScript, Rails and Sinatra.
          </CardText>
          <CardActions border style={{ margin: "10px" }}>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/react-portfolio"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://angelrod.dev"
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
              color: "yellow",
              minHeight: "176px",
              background:
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1552339527/rambo.png) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Lock-n-Load
          </CardText>
          <CardText>
            Strategy app built with Vue.js that uses Vue directives and bindings
            for functionality.
          </CardText>
          <CardActions border style={{ margin: "10px" }}>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/vue-js_lock-n-load"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://natural-jellyfish.surge.sh/"
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

export default Libraries;
