import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import JavaScript from "./languages/JavaScript";
import Libraries from "./languages/Libraries";
import Ruby from "./languages/Ruby";
import "./Projects.css";

class Projects extends Component {
  state = { activeTab: 0 };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Libraries />
          <JavaScript />
          <Ruby />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return <Libraries />;
    } else if (this.state.activeTab === 2) {
      return <JavaScript />;
    } else if (this.state.activeTab === 3) {
      return <Ruby />;
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
          <Tab>All</Tab>
          <Tab>React/Vue</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Ruby</Tab>
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
