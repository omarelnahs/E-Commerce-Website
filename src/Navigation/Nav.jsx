/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({handleInputChange, query}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter your search shoes."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-container">
        <a href="#" alt="">
          <FiHeart className="nav-icons" />
        </a>
        <a href="" alt="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="" alt="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;