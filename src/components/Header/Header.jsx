import { Link, NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
}

export default Header;
