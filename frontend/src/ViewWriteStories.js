import React from 'react';
import vwCSS from './viewWriteStories.css';
import {Link, Outlet} from 'react-router-dom';

function ViewWriteStories(props) {

  let imageURL;
  let imageID;
  let toViewString = "/viewStory-";
  let toWriteString = "/writeStory-";
  let painter = "Cindy Lam";
  let tutorial;
  let source;
  let leftPosition;
  let topPosition;
  let signatureTop;
  let signatureLeft;

  if(props.artwork === "Green-Lake-Stories"){
    imageURL = "./images/The_Refuge.jpg";
    imageID = "Normal_Green_Lake";
    toViewString += props.artwork;
    toWriteString += props.artwork;
    tutorial = "https://youtu.be/mty1KsIBSrk";
    leftPosition = 595;
    topPosition = 585;
    signatureLeft = 1010;
    signatureTop = 500;
  }
  else if(props.artwork === "Ghibli-House-Stories"){
    imageURL = "./images/Ghibili_House.jpg";
    imageID = "Normal_Ghibli_House";
    toViewString += props.artwork;
    toWriteString += props.artwork;
    tutorial = "https://youtu.be/bxYhv2deXxo";
    leftPosition = 595;
    topPosition = 610;
    signatureLeft = 540;
    signatureTop = 555;
  }
  else if(props.artwork === "Carosel-Stories"){
    imageURL = "./images/Carosel_Path.jpg";
    imageID = "Normal_Carosel";
    toViewString += props.artwork;
    toWriteString += props.artwork;
    source = "Original";
    leftPosition = 650;
    topPosition = 610;
    signatureLeft = 916;
    signatureTop = 550;
  }
  else {
    imageURL = "./images/Cooling_Mist.jpg";
    imageID = "Normal_Cooling_Mist";
    toViewString += props.artwork;
    toWriteString += props.artwork;
    source = "Original";
    leftPosition = 650;
    topPosition = 610;
    signatureLeft = 916;
    signatureTop = 550;
  }


  return (
    <div>

        <img src = {imageURL} id = {imageID} alt = {imageID}></img>
        <img style = {{left: `${signatureLeft}px`, top: `${signatureTop}px`}}src = './images/signature.png' id = "signature" alt = "CL-signature"></img>
        <Link to={toWriteString} ><button id="writeStoryButton">Write A Story!</button></Link>
        <Link to={toViewString} ><button id="viewStoryButton">View Stories!</button></Link>
        <p id="details" style={{left: `${leftPosition}px`, top: `${topPosition}px`}}>Painted By: {painter} <br/> Source: <a href={tutorial} target='blank'> {source} {tutorial}</a></p>
    </div>
  )
}

export default ViewWriteStories;