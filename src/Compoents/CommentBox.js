import React,{useState,useRef} from 'react'
import uuid from 'react-uuid'

function CommentBox() {

const [comments,setComment]=useState([])
const [Text,settext]=useState('')
const[editContain,setValue]=useState(false)
//const input1 = useRef(null);

let submitComment=()=>{
  
  setComment((pre)=>{
    return [...pre,{id:uuid(),text:Text,replay:[]}]
  })
  settext("")
}

let hanadleComment=(e)=>{
    if(e.target.id=="replay")
    {
        console.log("replay logic "+e.target.value )
        
        
    }
    else if(e.target.id=="Edit")
    {
   
     let el=document.querySelectorAll("span")
    
    for(let i=0;i<el.length;i++)
    {
      if(el[i].id==e.target.value)
      {
        el[i].contentEditable=true
        el[i].focus();
      }
      else{
        el[i].contentEditable=false
      }
    }
     console.log(el[0].id);
      console.log("Edit logic")
      setValue(true)
    
    }
    else {
      if(e.target.id=="Delete")
      {
        console.log("Delete logic")
      }
    }
}

  return (
    <>
    <div className='header'>
      <input value={Text} onChange={(e)=>settext(e.target.value)}></input>
      <button onClick={submitComment}>Send</button>
    </div>
    <div className='container'>
      {
        comments?
        <>
        {
          comments.map((comment)=>{
            return(<React.Fragment key={comment.id} >

            <div className='MainComment' id={comment.id} onClick={(e)=>{hanadleComment(e)}}>
              <span value={comment.id}  id={comment.id} contentEditable={editContain}  onChange={(e)=>{}} >{comment.text} </span>
              <button value={comment.id} id="replay">replay</button>
              
              <button value={comment.id} id="Edit">Edit</button>
              <button value={comment.id}  id="Delete">delete</button>
            </div>
            </React.Fragment>)
          })
        }
        </>:<></>
      }
    </div>
    </>
  )
}

export default CommentBox