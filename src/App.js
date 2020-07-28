import React from 'react';

import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
