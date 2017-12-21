import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Layout from "./Layout";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    );
  }
}
