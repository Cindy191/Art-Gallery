import React, { useState, useEffect } from 'react';
import viewStoriesCSS from './viewStories.css';

function ViewStories(props) {

    const [story, setStory] = useState([]);
    const [title, setTitle] = useState([]);
    const [user, setUser] = useState([]);
    const [id, setId] = useState([]);

    // const [likeList, setLikeList] = useState([]); 
    // const [likeCount, setLikeCount] = useState(0);

    const url = "http://localhost:4000/" + props.artLink;
    let imageSRC;
    let imageID;
    let signatureLeft;
    let signatureTop;

    // GET story
    const getStory = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // let storyArray = data.map(ob => <p key={ob._id}>{ob.body}</p>)
            let storyArray = data.map(ob => ob.body)
            let titleArray = data.map(ob => <p key={ob._id}>{ob.title}</p>)
            let userArray = data.map(ob => <p key={ob._id}>{ob.user}</p>)
            let idArray = data.map(ob => ob._id)            
            // let likesArray = data.map(ob => ob.likes)

            setStory(storyArray);
            setTitle(titleArray);
            setUser(userArray);
            setId(idArray);
            // setLikeList(likesArray);
        })
      }

      useEffect(() => {
        getStory()
      }, []) //suppose to run once, but is running twice? (evidence: console.log(data) is ran twice)

      if(props.artLink === "Green-Lake-Stories"){
        imageSRC = "./images/The_Refuge.jpg";
        imageID = "Green_Lake_Viewing";
        signatureLeft = 708;
        signatureTop = 625;
      }
      else if(props.artLink === "Ghibli-House-Stories"){
        imageSRC = "./images/Ghibili_House.jpg";
        imageID = "Ghibli_House_Viewing";
        signatureLeft = 95;
        signatureTop = 702;
      }
      else if(props.artLink === "Carosel-Stories"){
        imageSRC = "./images/Carosel_Path.jpg";
        imageID = "Carosel_Viewing";
        signatureLeft = 582;
        signatureTop = 698;
      }
      else {
        imageSRC = "./images/Cooling_Mist.jpg";
        imageID = "Cooling_Mist_Viewing";
        signatureLeft = 581;
        signatureTop = 698;
      }

      const [index, setIndex] = useState(0);

    const handleNextStory = () => {
      if(index < story.length-1){
          setIndex(prevIndex => prevIndex + 1);
      }
    }
    const handlePrevStory = () => {
      if(index > 0){
          setIndex((prevIndex) => prevIndex - 1);
      }
    }
  
// --------------------------------------------- NEW MATERIAL - LIKE --------------------------------------------- 
    // let likeCount = likeList[index];

    // const increaseLike = () => {
    //     likeCount++;
    //     likeList[index] = likeCount;
    // }

    // let url_for_likes = "http://localhost:4000/" + props.artLink + "/" + id[index];

    // const handleLike = () => {

    //   increaseLike();


    //   fetch(url_for_likes, {
    //     method: "PATCH",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         likes: likeCount
    //     })
    // }).then(res => {
    //     return res.json()
    // }).then(
    //     data => console.log(data))
    // .catch(error => console.log("ERROR"))
    // }
// --------------------------------------------- NEW MATERIAL - LIKE --------------------------------------------- 
  
return (
    <div>
        <img src={imageSRC} id = {imageID}></img>
        <img style = {{left: `${signatureLeft}px`, top: `${signatureTop}px`}}src = './images/signature.png' id = "signature" alt = "CL-signature"></img>
        <button id = "nextButton" onClick = {handleNextStory} >Next</button>
        <button id="prevButton" onClick = {handlePrevStory} >Prev</button>



        {/* <button onClick = {handleLike} id= "likeButton">Like</button>
        <p id="likeCount" >Likes: {likeList[index]}</p>  */}
       


        {/* <p>{id[index]}</p> */}
        <p id="pageNumber" >{index + 1} of {story.length}</p>
        <p id="titleText">{title[index]}</p>
        <p id="author">{user[index]}</p>
        <p id = "storyText">{story[index]}</p>

    </div>
  )
}

export default ViewStories;