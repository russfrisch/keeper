import React, { Fragment } from "react";
import NavBar from "./NavBar";
import './Layout.css'

export default class Layout extends React.Component {
  render () {
    return (
      <Fragment>
        <NavBar/>
        <main role="main" className="container">
          <div className="starter-template">
            <h1>Bootstrap starter template</h1>
            <p className="lead">
              Use this document as a way to quickly start any new project.
              <br/> All you get is this text and a mostly barebones HTML document.
            </p>
          </div>
        </main>
      </Fragment>
    )
  }
}