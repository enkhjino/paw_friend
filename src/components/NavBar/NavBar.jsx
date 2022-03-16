import { Link } from 'react-router-dom';
import "./NavBar.css";
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  
  return (
    <nav>  
        { user !== null ?
          <div className="navBar">
            <Link className="logo" to="/">HOME</Link>
        
          <div className="navRight">
            <Link to="/favorites"><img src="https://i.imgur.com/LtmgnrK.png" width="60px" height="60px" /></Link>
            &nbsp; | &nbsp;
            <span><img src="https://i.imgur.com/xOmanNB.png" width="60px" height="60px" /></span><span>{user.name}</span>
            &nbsp; | &nbsp;
            <Link onClick={handleLogOut} to="">LOG OUT</Link>
            </div>
          </div>
          :
          <div className="navBar">
            <Link className="logo" to="/">HOME</Link>
            &nbsp; | &nbsp;
            <Link to="/login">LOG IN</Link>
          </div>
        }
    </nav>
  );
}