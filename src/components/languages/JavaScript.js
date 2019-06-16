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

const JavaScript = () => {
  return (
    <div className="projects-grid">
      {/* Project 3 */}
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/map-attack.png) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Map-Attack
          </CardText>
          <CardText>
            The app uses the REST Countries API and Google Maps API to allow the
            user to view questions at random. The REST API country generator
            function passes the param to the Google Maps function and plots the
            given country onto the map for viewing.
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://map-attack.netlify.com/"
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </Cell>
      {/* Project 1.2 */}
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
                "url(https://github.com/angelr1076/recip-ease/blob/master/public/images/screencap1.png?raw=true) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Recipe-ease
          </CardText>
          <CardText>
            Two page app utilizing Babel and Webpack, and written in JavaScript.
            The app allows the user to create recipes, instructions and add
            ingredients.
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/recip-ease"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://recipe-easy.firebaseapp.com/index.html"
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </Cell>
      {/* Project 1.3 */}
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1547579944/sudzzz.png) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Sudzzz
          </CardText>
          <CardText>
            Beer list app written in JavaScript that allows users to create a
            digital beer list. The user can also select all or some beer on the
            list and adjust them based on checked selections.
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/sudzzz"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://brash-crush.surge.sh/"
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </Cell>
      {/* Project 2 */}
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1543806642/Screen_Shot_2018-12-02_at_10.09.05_PM.png) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Word-Spin
          </CardText>
          <CardText>
            The app generates random JavaScript terminology. Functions generate
            a hint as to what the word is, how many letters are in the word, the
            number of guesses remaining, letters already used and how many
            rounds the user won.
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/word-spin"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://angelr1076.github.io/word-spin/"
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </Cell>
      {/* Project 6 */}
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985056/mini-arcade.png) center / cover",
            }}
          />
          <CardText
            style={{
              color: "black",
              fontSize: "20px",
              padding: "5px",
            }}
          >
            BRB Arcade
          </CardText>
          <CardText>
            I created a Frogger-clone using the Phaser3 API. Implemented
            gamification strategy that randomizes sorting of enemy movement
            within various loops to enhance difficulty.
          </CardText>
          <CardText>Username: guest@gmail.com, Password: guestpass</CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/arcade-mini-games"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://brb-arcade.herokuapp.com/"
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </Cell>
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
              color: "yellow",
              minHeight: "176px",
              background:
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1542052847/Screen_Shot_2018-11-12_at_2.56.04_PM.png) center / cover",
            }}
          />
          <CardText
            style={{
              color: "black",
              fontSize: "20px",
              padding: "5px",
            }}
          >
            Fetch Verses
          </CardText>
          <CardText>
            Refactored bible verse app utilzing the Mashape API converted from
            jQuery to JavaScript. Uses Fetch and ES6.
          </CardText>
          <CardText />
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/verses-fetch"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://angelr1076.github.io/verses-fetch/#"
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

export default JavaScript;
