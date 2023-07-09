import React, { useState } from 'react';
import writeStoryCSS from './writeStory.css';

function WriteStory(props) {
    //POST method
    const [user, setUser] = useState('');
    const [title, setTitle] = useState('');
    const [storyBody, setStoryBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const titleValue = document.getElementById("titleBox");
        const userValue = document.getElementById("userNameBox");
        const storyBoxValue = document.getElementById("storyBodyBox");

        const url = "http://localhost:4000/" + props.artURL;
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user,
                title: title,
                body: storyBody
            })
        }).then(res => {
            return res.json()
        })
        .then(
            data => console.log(data),
            alert('Submission successful!'),
            titleValue.value = "",
            userValue.value = "",
            storyBoxValue.value = "") //empty inputboxes for display after submission
        .catch(error => console.log("ERROR"))

    }

    //images

    let imageSRC;
    let imageID;
    let signatureLeft;
    let signatureTop;
    if(props.artURL === "Green-Lake-Stories"){
        imageSRC = "./images/The_Refuge.jpg";
        imageID = "Green_Lake_Writing";
        signatureLeft = 1010;
        signatureTop = 488;
      }
      else if(props.artURL === "Ghibli-House-Stories"){
        imageSRC = "./images/Ghibili_House.jpg";
        imageID = "Ghibli_House_Writing";
        signatureLeft = 560;
        signatureTop = 495;
      }
      else if(props.artURL === "Carosel-Stories"){
        imageSRC = "./images/Carosel_Path.jpg";
        imageID = "Carosel_Writing";
        signatureLeft = 895;
        signatureTop = 490;
      }
      else {
        imageSRC = "./images/Cooling_Mist.jpg";
        imageID = "Cooling_Mist_Writing";
        signatureLeft = 895;
        signatureTop = 490;
      }

  return (
    <div>
        
        <img src={imageSRC} id = {imageID}></img>
        <img style = {{left: `${signatureLeft}px`, top: `${signatureTop}px`}}src = './images/signature.png' id = "signature" alt = "CL-signature"></img>
        <form onSubmit={handleSubmit} >
            <label id="titleLabel">Title:</label>
            <input 
                id="titleBox" 
                type="text" 
                name="title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
            />

            <label id="userNameLabel">User Name:</label>
            <input 
                id="userNameBox" 
                type="text" 
                name="userName" 
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
            />

            <textarea 
                id="storyBodyBox"
                rows="10"
                cols="120"
                placeholder='Type Story Here'
                value={storyBody}
                onChange = {(e) => setStoryBody(e.target.value)}
                required></textarea>
            <button id="publishButton" >Ready To Publish!</button>
        </form>
    </div>
  )
}

export default WriteStory;