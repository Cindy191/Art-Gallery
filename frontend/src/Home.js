import React from 'react';
import homeCSS from './home.css';
import PlaquesArt from './PlaquesArt';
import plaquesCSS from './plaques.css';

function Home() {

    return (
      <div>
          <PlaquesArt />
          <img src="./images/slanted-frame-GL.png" id = "Framed_Slanted_Green_Lake" alt = "Green Lake"/>
          <img src="./images/slanted-GL.png" id = "Slanted_Green_Lake" alt = "Green Lake"/>
          {/* <img src="./images/cat.png" id = "Slanted_Green_Lake" width = "190" alt = "Green Lake"/> */}

          <img src = "./images/emptyFrame-ghibli-carosel.png" id = "Framed_Ghibili_House" height = "150"  alt = "Ghibili_House"></img>
          <img src = "./images/Ghibili_House.jpg" id = "Ghibili_House" height = "150"  alt = "Ghibili_House"></img>
          
          <img src = "./images/emptyFrame-ghibli-carosel.png" id = "Framed_Carosel_Path" height = "150"  alt = "Carosel_Path"></img>
          <img src = "./images/Carosel_Path.jpg" id = "Carosel_Path" height = "150"  alt = "Carosel_Path"></img>

          <img src="./images/slanted-frame-CM.png" id = "Framed_Slanted_Cooling-Mist" alt = "Green Lake"/>
          <img src="./images/slanted-CM.png" id = "Slanted_Cooling_Mist"  alt = "Cooling Mist"></img>

          {/* -------------------- PLANTS -------------------*/}
          <img src="./images/white-plant.png" id = "white-plant" alt = "white-plant"/>

          {/* -------------------- SILHUOETTES -------------------*/}
          <img src="./images/silhuottes/Subject0.png" id = "shortBlond" alt = "shortBlond"/>
          <img src="./images/silhuottes/Subject1.png" id = "longOrangeHair" alt = "longOrangeHair"/>
          <img src="./images/silhuottes/Subject2.png" id = "brownTank" alt = "brownTank"/>
          <img src="./images/silhuottes/Subject4.png" id = "crossedArms" alt = "crossedArms"/>
          <img src="./images/silhuottes/Subject5.png" id = "blueLongSleeve" alt = "blueLongSleeve"/>
          <img src="./images/silhuottes/Subject6.png" id = "shortBlackHair" alt = "shortBlackHair"/>
          <img src="./images/silhuottes/Subject8.png" id = "joy" alt = "joy"/>
          <img src="./images/silhuottes/Subject9.png" id = "curlyGrayPoof" alt = "curlyGrayPoof"/>
          <img src="./images/silhuottes/Subject10.png" id = "purpleStarPants" alt = "purpleStarPants"/>

          {/* -------------------- BACKGROUND PAINTINGS -------------------*/}
          <img src = "./images/Carosel_Path.jpg" id = "far-Painting1" height = "150"  alt = "Carosel_Path"></img>
          <img src = "./images/emptyFrame-ghibli-carosel.png" id = "frame-far-Painting1"  alt = "Carosel_Path"></img>
          <button id="background_plaque_Path" disabled="true" >Path</button>

          <img src = "./images/Ghibili_House.jpg" id = "far-Painting2" height = "150"  alt = "Ghibili_House"></img>
          <img src = "./images/emptyFrame-ghibli-carosel.png" id = "frame-far-Painting2"  alt = "Ghibili_House"></img> 

          {/* -------------------- BACKGROUND PEOPLE -------------------*/}
          <img src="./images/silhuottes/Subject3.png" id = "orangeHoodie" alt = "orangeHoodie"/>
          <img src="./images/silhuottes/Subject7.png" id = "overallsDuo" alt = "silhuotte9"/>

      </div>
    )
}

export default Home;
