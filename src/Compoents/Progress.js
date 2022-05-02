import React,{useState} from 'react'
import ProgressChild from './ProgressChild'

function Progress() {
    const [color,setColor]=useState()
    const[Progress,setProgress]=useState()
  return (  
      <>
      <div style={{display:"flex", justifyContent:"center",margin:"2rem"}}>
        <select value={color} onChange={(e)=>setColor(e.target.value) }>
        <option value="Green">Green</option>
        <option value="Red">Red</option>
        </select>
        <select value={Progress} onChange={(e)=>setProgress(e.target.value) }>
        <option value="25">25%</option>
        <option value="50">50%</option>
        <option value="75">75%</option>
        <option value="100">100%</option>
        </select>
    </div>
    {
       color && Progress && <ProgressChild color={color} Progress={Progress}></ProgressChild>
    }
      
      </>
  )
}

export default Progress