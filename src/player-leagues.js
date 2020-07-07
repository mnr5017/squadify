import React from 'react';
//import PropTypes from 'prop-types';
import './player-leagues.css';
import PLAYERS from "./data/player.js";

function PlayerLeagues() {
  const playerData = PLAYERS;

  const league = playerData.PLAYERS.leagues.map((r, index) => (
	  <li key={index}> {r.leagueName} </li>
	)); 

  return(
    <div>
  	  <section>
  		<h2>Leagues</h2>
  		<ul>
  		  {league}
  	    </ul>
  	  </section>
  	</div>
  );
}

export default PlayerLeagues;