import React from 'react'
import './Chess.css'
export default function Chess() {

  const inputRef = React.useRef(null);
  React.useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <div className='zero' ref={inputRef}>
      <form className='first'>
      <h1>Hello this is for only testing perpose</h1>
      <input className='second'
        type="text"
        placeholder="Enter Name" 
        name="name" 
        />
    </form>
    </div>
  )
}
