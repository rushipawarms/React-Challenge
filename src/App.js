
import { NavLink } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
   <h1 style={{textAlign:"center"}}>FrontEnd challenges</h1>
    <div style={{display:"flex",justifyContent:"space-evenly", alignItems:"center", marginTop:"2rem"}}>
    <NavLink className="challenge" to="/CommentBox">Comment Box</NavLink>
    <NavLink className="challenge"  to="/New">New challenge</NavLink>
    <NavLink className="challenge"  to="/sddsd">sjds</NavLink>
    <NavLink className="challenge"  to="/sddsd">sihdisjd</NavLink>
    <NavLink className="challenge"  to="/sddsd">jkdff</NavLink>
    </div>
    </>
  );
}

export default App;
