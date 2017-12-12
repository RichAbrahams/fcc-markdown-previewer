import React, { Component } from "react";
import FA from "react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer lime darken-3">
          <a href="https://github.com/RichAbrahams">
            <span>Created by Rich Abrahams</span>
            <FA className="fa-github" name="fa-github" size="2x" />
          </a>
      </footer>
    );
  }
}
