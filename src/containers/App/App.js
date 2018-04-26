import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Blog from "../Blog/Blog";

class App extends Component {
  render() {
    return (
      <Layout>
        <Blog/>
      </Layout>
    );
  }
}

export default App;

