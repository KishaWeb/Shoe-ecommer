import React from 'react';
import Nav from './nav';
import Head from './head';
import Main from './Main_container';
import Footer from './footer'
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Head />
      <Main />
      <Footer />
    </div>
  );
};

export default App;