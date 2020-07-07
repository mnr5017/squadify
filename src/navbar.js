import React from 'react';
import './navbar.css';

function NavBar() {
  	return(
      <div>
  		  <header>
          <h2><a href="https://reactjs.org/docs">Squadify</a></h2>
          <nav>
            <li><a href="https://reactjs.org/docs">Match Day</a></li>
            <li><a href="https://reactjs.org/docs">Leagues</a></li>
            <li><a href="https://reactjs.org/docs">Schedule</a></li>
            <li><a href="https://reactjs.org/docs">Roster</a></li>
            <li><a href="https://reactjs.org/docs">Stats</a></li>
          </nav>
        </header>
      </div>
  	);
}

export default NavBar;