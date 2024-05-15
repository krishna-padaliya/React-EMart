import React from "react";
import { MdLocalShipping } from "react-icons/md";
// import { AiOutlineSearch } from 'react-icons/ai';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { FiLogIn } from "react-icons/fi";
import { CiLogout} from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import logo from "../image/emart.png";
import "./nav.css";
const Nav = ({ search, setSearch, searchproduct , cart }) => {
  const { loginWithRedirect, logout,  isAuthenticated } = useAuth0();
  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="info">
            <p>
              {" "}
              <MdLocalShipping /> Free Shipping When Shopping upto $1000
            </p>
          </div>
          <div className="offer">
          {isAuthenticated ? (
            // if user is login then Logout Button will shown and also user profile
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button 
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // if user is not Login then login button will shown
            <div className="user">
              <div className="icon">
                <FiLogIn />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
          </div>
        </div>
        <div className="mid_header">
          {/* <div className='logo'>
            <img src={logo} alt='logo'></img>
          </div> */}

          {/* <div className="user_profile">
            {
              // User Profile Will Shown Here
              isAuthenticated ? (
                <>
                  <div className="icon">
                    <CiUser />
                  </div>
                  <div className="info">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="icon">
                    <CiUser />
                  </div>
                  <div className="info">
                    <p>Please Login</p>
                  </div>
                </>
              )
            }
          </div> */}
          {/* <div className='search_box'>
            <input type='text' value={search} placeholder='searh' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchproduct}><AiOutlineSearch /></button>
          </div> */}
          
        </div>

        <div className="last_header">
          <div className="logo">
            <img src={logo} alt="logo" width={"150px"}></img>
          </div>
          {/* <div className='user_profile'>
            {
              // User Profile Will Shown Here
              isAuthenticated ?
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              </>
              :
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <p>Please Login</p>
              </div>
              </>
            }
          </div> */}
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="search_box">
          <button type="button" class="btn">
          <IoSearchSharp />
          </button>
          <button type="button" class="btn">
          <FaRegUser />
            </button>
           
            
            <button type="button" class="btn  position-relative">
              <FaRegHeart />
              <span  style={{backgroundColor:"#cd1e76"}} class="position-absolute top-40 start-110 translate-middle badge rounded-circle">
                0
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <button type="button" class="btn  position-relative">
            <Link to="/cart" className="link" style={{color:"#000"}}>
            <HiOutlineShoppingCart />
                </Link>
             
              <span style={{backgroundColor:"#cd1e76"}} class="position-absolute top-40 start-110 translate-middle badge rounded-pill ">
                {cart.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>

            {/* <input type='text' value={search} placeholder='searh' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchproduct}><AiOutlineSearch /></button> */}
          </div>
          {/* <div className='offer'>
            <p>flat 10% over all iphone</p>
          </div> */}
        </div>
        <hr />
       
      </div>
    </>
  );
};

export default Nav;
