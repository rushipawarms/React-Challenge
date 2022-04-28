import React,{useState} from 'react'
import './Star.css'

function Star() {
  const smileys = ["😢", "😞", "😐", "😀", "😎"];
  const[star,setstar]=useState([])
  const[unStar,setUnstar]=useState([])
  const[final,setFinal]=useState(false)

  let handleClick=(e)=>{

    setFinal(true)


  }
  let handleHover=(e)=>{

    let target=e.target

    if(target.classList.contains("star"))
    {
      let n=target.id
      let n1=5-n
      let arr=[]
      let arr1=[]
      for(let i=1;i<=5;i++)
      {
        if(i<=n)
        {
          arr.push(i);
        }
        else{
          arr1.push(i)
        }
      }
      setstar(arr);
      setUnstar(arr1)
    }

  }
  let handleLeave=(e)=>{
    if(final==false)
    {
      setstar([])
      setUnstar([])

    }
    
  
  }

  return (
  <>
    <div  id="starContainer" className="star-container" onClick={(e)=>handleClick(e)} onMouseOver={(e)=>handleHover(e)} onMouseLeave={(e)=>{handleLeave(e)}} >
    {
      star.length==0?<><div id="1" className='star star-empty'></div>
      <div id="2"  className=' star star-empty'></div>
      <div  id="3"  className='star star-empty'></div>
      <div  id="4"  className='star star-empty'></div>
      <div  id="5"  className='star star-empty'></div></>:
      <>{
      star.map((el)=>{

       return( <div id={el} className='star star-filled'></div>)
      })
    }
    {
      unStar.map((el)=>{
        return(<div id={el} className='star star-empty'></div>)
      })
    }
      </>
    }
    </div>
    <div className="info">Click to set the rating</div>
  
    
      
      <div className="smiley-container">{smileys[star.length-1]}</div>
    
  </>
  )
}

export default Star