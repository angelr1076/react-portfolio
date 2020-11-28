import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import JavaScript from "./languages/JavaScript";
import Python from "./languages/Python";
import Ruby from "./languages/Ruby";
import "./Projects.css";

class Projects extends Component {
  state = { activeTab: 0 };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <JavaScript />;
    } else if (this.state.activeTab === 1) {
      return <Python />;
    } else if (this.state.activeTab === 2) {
      return <Ruby />;
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <JavaScript />
          <Python />
          <Ruby />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs" style={{ paddingTop: "40px" }}>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
          <Tab>Ruby</Tab>
          <Tab>All</Tab>
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
