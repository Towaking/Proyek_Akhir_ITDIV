
import React from "react";
import { Link } from 'react-router-dom';

export function Navbar() {
  const logo = "/images/CinemateLogo.png";
  const search = "/images/Search.png";
  const location = "/images/Location.png"; 

  return (
    <nav className="navbar">
        <Link to="/">
          <div className="navbar_logo">
            <img src={logo} alt="image" />
          </div>
        </Link>
        <div className="navbar_feature">
            <div className="navbar_search">
                <input type="text" name="" placeholder="Search Movies"/>
                <img src={search} alt="search" />
            </div>
            <div className="navbar_location">
                <img src={location} alt="" />
                <select name="" id="" >
                    <option value="" disabled selected hidden>Location</option>
                    <option value="">Jakarta</option>
                    <option value="">PKU</option>
                    <option value="">EPC</option>
                    <option value="">LOL</option>
                </select>
            </div>
            <Link to="/signin">
              <div className="navbar_sign_in">
                  <button>Sign in</button>
              </div>
            </Link>
        </div>
    </nav>
  );
}

