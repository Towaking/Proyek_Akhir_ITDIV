import React from "react";

export function Navbar() {
  const logo = "images/CinemateLogo.png";
  const search = "images/Search.png";
  const location = "images/Location.png"; 

  return (
    <nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="image" />
        </div>
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
            <div className="navbar_sign_in">
                <button>Sign in</button>
            </div>
        </div>
    </nav>
  );
}
