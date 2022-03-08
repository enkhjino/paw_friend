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
      <Link to="/">HOME</Link>
      &nbsp; | &nbsp;
      {/* <Link to="/cat">Cat List</Link>
      &nbsp; | &nbsp;
      <Link to="/dog">Dog List</Link>
      &nbsp; | &nbsp; */}
      <Link to="/favorites">Favorites List</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}