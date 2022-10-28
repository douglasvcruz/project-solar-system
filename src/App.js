import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline="test" />
        <PlanetCard planetName="test" planetImage="test" />
      </div>
    );
  }
}

export default App;
