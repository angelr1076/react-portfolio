import React, { Component } from "react";
import { Header, Navigation, Layout, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="header-color">
        <Layout>
          <Header
            className="header-color"
            title={<Link style={{ textDecoration: "none" }} to="/" />}
            scroll
          >
            <Navigation>
              <Link to="/">About</Link>
              <Link to="/mywork">My Work</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
              <Link to="/">About</Link>
              <Link to="/mywork">My Work</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
