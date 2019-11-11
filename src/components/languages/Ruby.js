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

const Ruby = () => {
  return (
    <div className="projects-grid">
      {/* Project 7 */}
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985057/star-shipped.png) center / cover",
            }}
          />
          <CardText
            style={{
              color: "black",
              fontSize: "20px",
              paddingBottom: "8px",
            }}
          >
            Star-Shipped
          </CardText>
          <CardText>
            Star-shipped uses ActiveRecord to create database tables for users,
            ships and jobs tying them all together with an assignments join
            table in Ruby on Rails.{" "}
            <p>Username: guest@gmail.com, Password: guestpass</p>
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/star-shipped"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://star-shipped-app.herokuapp.com/"
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/doggie-bloggie.png) center / cover",
            }}
          />
          <CardText
            style={{
              color: "black",
              fontSize: "20px",
              paddingBottom: "8px",
            }}
          >
            Doggie-Bloggie
          </CardText>
          <CardText>
            Rails blog app with full CRUD features. Utilizes full MVC
            capabilities of Rails.{" "}
            <p style={{ padding: "5px" }}>
              Username: guest, Password: guestpass
            </p>
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/ruby-on-rails-crud-blog"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://doggie-bloggie.herokuapp.com/"
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </Cell>
      {/* Project 9 */}
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985056/ruby-flooring.png) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Ruby Flooring
          </CardText>
          <CardText>
            Mock business website written in Sinatra. Has a Twitter-like
            character count feature written in JavaScript.
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/sinatra-business-website"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ruby-flooring.herokuapp.com/"
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </Cell>
      {/* Project 10 */}
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
              color: "white",
              minHeight: "176px",
              background:
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/coder-bytes.png) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Coder-Bytes
          </CardText>
          <CardText>
            CRUD site written in Ruby using Sinatra. Coder-Bytes allows users to
            setup user accounts, profiles, posts and comments.
          </CardText>
          <CardText>Username: guest@gmail.com, Password: guestpass</CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/coder-bytes-sinatra-crud-blog"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://coder-bytes.herokuapp.com/"
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

export default Ruby;
