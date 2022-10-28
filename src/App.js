import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
        <MissionCard name="test" year={ 5 } country="test" destination="test" />
      </div>
    );
  }
}

export default App;
