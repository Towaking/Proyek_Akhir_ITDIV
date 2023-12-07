
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MyProfile from "../MyProfile/MyProfile";

export function Navbar_2() {
  const [open,setopen] = useState(false);
  const logo = "/images/CinemateLogo.png";
  const search = "/images/Search.png";
  const location = "/images/Location.png";
  const profile = "/images/Profile.png"; 

  return (
    <nav className="navbar">
        <Link to="/member">
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
              <div className="navbar_2_profile" onClick={()=>setopen(()=>!open)} >
                { open ?  <MyProfile/> : <img src="/images/Profile.png" alt="" /> }
              </div>
        </div>
    </nav>
  );
}

