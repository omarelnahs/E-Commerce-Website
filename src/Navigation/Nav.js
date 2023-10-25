/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        
        <input
          type="text"
          placeholder="Enter Your Search shoes"
          className="search-input"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
