import React from 'react';
import "./schedule.css";

class Schedule extends React.Component {

  render() {
  	return(
  		<div>
  		  <section class="schedule">
  		    <h2>2020 Schedule</h2>
  		  	  <ul>
  		  	    <li>@ Cleveland Browns  2:00pm  Sept, 17</li>
  		  	    <li>vs Denver Broncos  11:00am  Oct 10</li>
  		  	    <li>vs Seattle Seahawks  6:30pm  Nov 3</li>
  		  	  </ul>
  		  </section>
  		</div>
  	);
  }
}

export default Schedule;