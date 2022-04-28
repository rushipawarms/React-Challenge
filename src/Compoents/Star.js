import React from 'react'
import './Star.css'

function Star() {
  const smileys = ["😢", "😞", "😐", "😀", "😎"];
  const starCount = 5;
  let rating = 0;
  let filled = 0; 
  let unfilled = 0; 
  let starContainer
  let stars 
 let smileyContainer
  function fillStars(count) {
  
    for (let i = filled; i < count; i++) {
      stars[i].classList.add("star-filled");
      stars[i].classList.remove("star-empty");
    }
  
    for (let i = count; i < unfilled; i++) {
      stars[i].classList.remove("star-filled");
      stars[i].classList.add("star-empty");
    }
  
    filled = count;
    unfilled = count;
  }
  let handleHover=(e)=>{

    const target = e.target;
     starContainer = document.getElementById("starContainer");

     stars = starContainer.querySelectorAll(".star");
  

  if (target.classList.contains("star")) {
    const index = target.id;
    fillStars(+index);
    
  }
  }

let handleLeave=(e)=>{
  fillStars(+rating);
}
let handleClick=(e)=>{
  const target = e.target;
  if (target.classList.contains("star")) {
    rating = +target.id;
    setSmiley(rating);
  }
}

function hoverListener(event) {
  const target = event.target;
  if (target.classList.contains("star")) {
    const index = target.dataset.index;
    fillStars(+index);
  }
}
function setSmiley(rating) {
  smileyContainer = document.getElementById("smileyContainer");
 
  const index = Math.ceil((smileys.length * rating) / starCount) - 1;

  smileyContainer.textContent = smileys[index];
}
  return (
    <>
    <div  id="starContainer" className="star-container" onClick={(e)=>handleClick(e)} onMouseOver={(e)=>handleHover(e)} onMouseLeave={(e)=>{handleLeave(e)}} >
      <div id="1" className='star star-empty'></div>
      <div id="2"  className=' star star-empty'></div>
      <div  id="3"  className='star star-empty'></div>
      <div  id="4"  className='star star-empty'></div>
      <div  id="5"  className='star star-empty'></div>
    </div>
    <div className="info">Click to set the rating</div>
    <div id="smileyContainer" className="smiley-container"></div>
    </>
    
  )
}

export default Star