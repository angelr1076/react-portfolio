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
            Portfolio site built with React showcasing my projects.
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1573437506/Screen_Shot_2019-11-10_at_6.35.40_PM.png) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Bird-Spotter
          </CardText>
          <CardText>
            Full-stack Node.js app. Bird-Spotter uses MongoDB as a database and
            supports full CRUD features. The app also uses Google Maps to plot
            out locations where birds were spotted by users.
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/bird-spotter-app"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://bird-spotter.herokuapp.com/"
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1589679931/gamescreen.png) center / cover",
            }}
          />
          <CardText style={{ color: "black", fontSize: "20px" }}>
            Map-Attack
          </CardText>
          <CardText>
            Map Attack uses the REST Countries and Google Maps API. The app
            allows the user to view specific country questions randomly
            generated by the API. The Google Maps API plots the given country's
            location onto the map as well.
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/MapAttackRemastered"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://mapattackre.netlify.app/"
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
            Recip-Ease uses Babel and Webpack. The app allows the user to create
            recipes, add instructions and add ingredients to each recipe --
            checking and unchecking available ingredients and displaying
            available ingredient amounts.
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
            Word-Spin generates random JavaScript terminology. Functions add a
            hint for the user, number of letters that are in the word, the
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
            Bible verse app utilzing the Mashape API converted from jQuery to
            Vanilla JavaScript. Uses Fetch and ES6.
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
                "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1579924308/Screen_Shot_2020-01-24_at_10.51.33_PM.png) center / cover",
            }}
          />
          <CardText
            style={{
              color: "black",
              fontSize: "20px",
              padding: "5px",
            }}
          >
            Node Weather
          </CardText>
          <CardText>Weather app built with Node.js.</CardText>
          <CardText />
          <CardActions border>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/angelr1076/node-js-weather"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://node-weather-angel.herokuapp.com/"
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
