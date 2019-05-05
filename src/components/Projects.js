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
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "whitesmoke" }}>All</Tab>
          <Tab style={{ color: "whitesmoke" }}>React/Vue</Tab>
          <Tab style={{ color: "whitesmoke" }}>JavaScript</Tab>
          <Tab style={{ color: "whitesmoke" }}>Ruby</Tab>
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
