
import { NavLink } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
   <h1 style={{textAlign:"center"}}>FrontEnd challenges</h1>
    <div style={{display:"flex",justifyContent:"space-evenly", alignItems:"center", marginTop:"2rem"}}>
    <NavLink className="challenge" to="/CommentBox">Comment Box</NavLink>
    <NavLink className="challenge"  to="/Star">Star challenge</NavLink>
   
    </div>
    </>
  );
}

export default App;
