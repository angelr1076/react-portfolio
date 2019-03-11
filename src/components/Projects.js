import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu
} from "react-mdl";
import "./Projects.css";

class Projects extends Component {
  state = { activeTab: 0 };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Cell col={6}>
            <Card
              shadow={5}
              style={{
                height: "400px",
                minWidth: "450",
                margin: "auto",
                marginBottom: "20px",
              }}
            >
              <CardTitle
                style={{
                  color: "yellow",
                  minHeight: "176px",
                  background:
                    "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1541199159/Screen_Shot_2018-11-02_at_6.51.56_PM.png) center / cover",
                }}
              />
              <CardText style={{ color: "black", fontSize: "20px" }}>
                Portfolio Site
              </CardText>
              <CardText>
                Portfolio site built in React showcasing all projects
                written in React, JavaScript, Rails and Sinatra.
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
                    href="https://angelroddie.com"
                  >
                    Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }} />
            </Card>
          </Cell>
          {/* Project 1.1 */}
          <Cell col={6}>
            <Card
              shadow={5}
              style={{
                height: "400px",
                minWidth: "450",
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
                Strategy app built with Vue.js that uses Vue directives
                and bindings for functionality.
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
          {/* Project 3 */}
          <Cell col={6}>
            <Card
              shadow={5}
              style={{
                height: "400px",
                minWidth: "450",
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
                The app uses the REST Countries API and Google Maps API to
                allow the user to view questions at random. The REST API
                country generator function passes the param to the Google
                Maps function and plots the given country onto the map for
                viewing.
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
                minWidth: "450",
                margin: "auto",
                marginBottom: "20px",
              }}
            >
              <CardTitle
                style={{
                  color: "yellow",
                  minHeight: "176px",
                  background:
                    "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1547660216/screecap1.png) center / cover",
                }}
              />
              <CardText style={{ color: "black", fontSize: "20px" }}>
                Recipe-ease
              </CardText>
              <CardText>
                Two page app utilizing Babel and Webpack, and written in
                JavaScript. The app allows the user to create recipes,
                instructions and add ingredients.
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
                minWidth: "450",
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
                Beer list app written in JavaScript that allows users to
                create a digital beer list. The user can also select all
                or some beer on the list and adjust them based on checked
                selections.
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
                    href="https://tart-condition.surge.sh/"
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
                minWidth: "450",
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
                The app generates random JavaScript terminology. Functions
                generate a hint as to what the word is, how many letters
                are in the word, the number of guesses remaining, letters
                already used and how many rounds the user won.
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
                minWidth: "450",
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
                I created a Frogger-clone using the Phaser3 API.
                Implemented gamification strategy that randomizes sorting
                of enemy movement within various loops to enhance
                difficulty.
              </CardText>
              <CardText>
                Username: guest@gmail.com, Password: guestpass
              </CardText>
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
                minWidth: "450",
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
                Star-shipped uses ActiveRecord to create database tables
                for users, ships and jobs tying them all together with an
                assignments join table in Ruby on Rails.{" "}
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
                minWidth: "450",
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
                Ruby on Rails blog app with full CRUD features. Styling is
                built completely from scratch and uses no libraries for
                customization. Utilizes full MVC capabilities of Rails.{" "}
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
                minWidth: "450",
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
                Mock business website written in Sinatra. Has a
                Twitter-like character count feature written in
                JavaScript.
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
                minWidth: "450",
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
                CRUD site written in Ruby using the Sinatra framework that
                allows users to setup user accounts, profiles, posts and
                comments.
              </CardText>
              <CardText>
                Username: guest@gmail.com, Password: guestpass
              </CardText>
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
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Cell col={6}>
            <Card
              shadow={5}
              style={{
                height: "400px",
                minWidth: "450",
                margin: "auto",
                marginBottom: "20px",
              }}
            >
              <CardTitle
                style={{
                  color: "yellow",
                  minHeight: "176px",
                  background:
                    "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1541199159/Screen_Shot_2018-11-02_at_6.51.56_PM.png) center / cover",
                }}
              />
              <CardText style={{ color: "black", fontSize: "20px" }}>
                Portfolio Site
              </CardText>
              <CardText>
                Portfolio site built in React showcasing all projects
                written in React, JavaScript, Rails and Sinatra.
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
                    href="https://angelroddie.com"
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
                minWidth: "450",
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
                Strategy app built with Vue.js that uses Vue directives
                and bindings for functionality.
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
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 3 */}
          <Cell col={6}>
            <Card
              shadow={5}
              style={{
                height: "400px",
                minWidth: "450",
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
                The app uses the REST Countries API and Google Maps API to
                allow the user to view questions at random. The REST API
                country generator function passes the param to the Google
                Maps function and plots the given country onto the map for
                viewing.
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
                minWidth: "450",
                margin: "auto",
                marginBottom: "20px",
              }}
            >
              <CardTitle
                style={{
                  color: "yellow",
                  minHeight: "176px",
                  background:
                    "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1547660216/screecap1.png) center / cover",
                }}
              />
              <CardText style={{ color: "black", fontSize: "20px" }}>
                Recipe-ease
              </CardText>
              <CardText>
                Two page app utilizing Babel and Webpack, and written in
                JavaScript. The app allows the user to create recipes,
                instructions and add ingredients.
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
                minWidth: "450",
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
                Beer list app written in JavaScript that allows users to
                create a digital beer list. The user can also select all
                or some beer on the list and adjust them based on checked
                selections.
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
                    href="https://tart-condition.surge.sh/"
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
                minWidth: "450",
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
                The app generates random JavaScript terminology. Functions
                generate a hint as to what the word is, how many letters
                are in the word, the number of guesses remaining, letters
                already used and how many rounds the user won.
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
                minWidth: "450",
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
                I created a Frogger-clone using the Phaser3 API.
                Implemented gamification strategy that randomizes sorting
                of enemy movement within various loops to enhance
                difficulty.
              </CardText>
              <CardText>
                Username: guest@gmail.com, Password: guestpass
              </CardText>
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
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 7 */}
          <Cell col={6}>
            <Card
              shadow={5}
              style={{
                height: "400px",
                minWidth: "450",
                margin: "auto",
                marginBottom: "20px"
              }}
            >
              <CardTitle
                style={{
                  color: "black",
                  minHeight: "176px",
                  background:
                    "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985057/star-shipped.png) center / cover"
                }}
              />
              <CardText
                style={{
                  color: "black",
                  fontSize: "20px",
                  paddingBottom: "8px"
                }}
              >
                Star-Shipped
              </CardText>
              <CardText>
                Star-shipped uses ActiveRecord to create database tables for
                users, ships and jobs tying them all together with an
                assignments join table in Ruby on Rails.{" "}
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
                minWidth: "450",
                margin: "auto",
                marginBottom: "20px"
              }}
            >
              <CardTitle
                style={{
                  color: "black",
                  minHeight: "176px",
                  background:
                    "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/doggie-bloggie.png) center / cover"
                }}
              />
              <CardText
                style={{
                  color: "black",
                  fontSize: "20px",
                  paddingBottom: "8px"
                }}
              >
                Doggie-Bloggie
              </CardText>
              <CardText>
                Ruby on Rails blog app with full CRUD features. Styling is built
                completely from scratch and uses no libraries for customization.
                Utilizes full MVC capabilities of Rails.{" "}
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
                minWidth: "450",
                margin: "auto",
                marginBottom: "20px"
              }}
            >
              <CardTitle
                style={{
                  color: "black",
                  minHeight: "176px",
                  background:
                    "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985056/ruby-flooring.png) center / cover"
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
                minWidth: "450",
                margin: "auto",
                marginBottom: "20px"
              }}
            >
              <CardTitle
                style={{
                  color: "white",
                  minHeight: "176px",
                  background:
                    "url(https://res.cloudinary.com/angelrodriguez/image/upload/v1540985055/coder-bytes.png) center / cover"
                }}
              />
              <CardText style={{ color: "black", fontSize: "20px" }}>
                Coder-Bytes
              </CardText>
              <CardText>
                CRUD site written in Ruby using the Sinatra framework that
                allows users to setup user accounts, profiles, posts and
                comments.
              </CardText>
              <CardText>
                Username: guest@gmail.com, Password: guestpass
              </CardText>
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
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "white" }}>All</Tab>
          <Tab style={{ color: "white" }}>React/Vue</Tab>
          <Tab style={{ color: "white" }}>JavaScript</Tab>
          <Tab style={{ color: "white" }}>Ruby</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
