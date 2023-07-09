import React from 'react';
import plaquesCSS from './plaques.css';
import {Link} from 'react-router-dom';
import Home from './Home';

function PlaquesArt() {

  return (
    <div>
      <Link to ="/viewWriteStories-GreenLake" ><button id="plaque_Lake">The Refuge</button></Link>
      <Link to ="/viewWriteStories-GhibliHouse" ><button id="plaque_House">The Ghibili House</button></Link>
      <Link to ="/viewWriteStories-Carosel" ><button id="plaque_Path">The Carosel Path</button></Link>
      <Link to ="/viewWriteStories-CoolingMist" ><button id="plaque_Mist">The Cooling Mist</button></Link>
    </div>
  )
}

export default PlaquesArt;