import React,{useState} from 'react'
import './TaskBar.css'
import uuid from 'react-uuid'


function TaskBar() {

    const [text,setText]=useState('');
    const [data,setData]=useState([])

   

let AddInList=()=>{
    if(text!='')
    {
        setData((prev)=>{
            return [...prev,{id:uuid(),text:text,status:"#d1ccc0",checked:false}]
        })
        setText("");
    }
  
    
}
let handleCheck=(e)=>{
   
    setData(data.map((el)=>{
        return el.id==e.target.value ? el.status=="#d1ccc0"? {...el,status:"#C4E538",checked:true}:{...el,status:"#d1ccc0",checked:false}:el
    }))
}

let handleDelete=(e)=>{
    setData(data.filter((el)=>{
        return el.id!=e.target.value
    }))
}
//console.log(data)
  return (
    <div className='container'>
        <h1>TaskList</h1>
        <div className='taskAdd' >
        <input type="text" style={{border:"none",outline: "none",height:"2rem",width:"19rem"}} value={text} onChange={(e)=>setText(e.target.value)}></input>
        <button style={{height:"3rem",borderRadius:".5rem", position: "absolute",right: "0.5rem",background:"#576574",color:"white"}} onClick={AddInList}>Add Task</button>
        
        </div>
        <hr style={{color: "black", width: "30rem"}}/>
        <div className='TaskList'>
            {
                
                data?
                <>
                {
                data.map((task,ind)=>{
                    
                    return(<>

                        <div key={ind} className='tasks' style={{background:`${task.status}`}}>
                            <input type='checkbox' checked={task.checked} value={task.id} onChange={(e)=>{handleCheck(e)}} />
                            <p style={{width:"80%",overflow: "auto",textDecorationLine:task.checked?"line-through":"none" }}>{task.text}</p>
                            <button value={task.id} onClick={(e)=>handleDelete(e)} className='delete'>delete</button>
                        </div>
                    
                    </>)
                    
                })
                }
                </>
                :<></>
            }
        </div>
    </div>
  )
}

export default TaskBar