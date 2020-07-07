import React from 'react';
import NavBar from './navbar';
import MatchCountdown from './match-countdown';
import Schedule from './schedule';
import PlayerLeagues from './player-leagues';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <MatchCountdown />
      <div className="schedule-shop">
        <Schedule />
        <PlayerLeagues />
      </div>
    </div>
  );
}

export default App;
