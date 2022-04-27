
import { NavLink } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
   <h1 style={{textAlign:"center"}}>FrontEnd challenges</h1>
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap" ,alignItems:"center", marginTop:"2rem"}}>
    <NavLink className="challenge" to="/CommentBox">Comment Box</NavLink>
    <NavLink className="challenge"  to="/Star">Star challenge</NavLink>
    <NavLink className="challenge"  to="/TaskList">TaskList</NavLink>
    <NavLink className='challenge' to="/FoodApp">FoodApp</NavLink>
    <NavLink className='challenge' to="/EmailBox">EmailBox</NavLink>
    <NavLink className="challenge" to="/GithubRepoComparison">GithubRepoComparison</NavLink>
   </div>
    </>
  );
}

export default App;
