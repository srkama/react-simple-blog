import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Blog from "../Blog/Blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Blog/>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

