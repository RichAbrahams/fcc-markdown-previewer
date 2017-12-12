import React, { Component } from "react";
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default class componentName extends Component {
  render() {
    return (
      <div className="main-content">
        <LeftPanel />
        <RightPanel />
      </div>
    );
  }
}
