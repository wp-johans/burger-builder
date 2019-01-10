import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <h1>Hello BurgerBuilder!</h1>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
