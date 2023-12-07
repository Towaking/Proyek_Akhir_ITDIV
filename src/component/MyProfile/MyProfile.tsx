import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";

export default function MyProfile() {
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const phone = localStorage.getItem('userPhone');
    const saldo = localStorage.getItem('userSaldo');
    const Navigate = useNavigate();
    function isEdits(check : Number):boolean{

      return true;  
    }
    function logout(){
      localStorage.removeItem('userID');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPhone');
      localStorage.removeItem('userName');
      localStorage.removeItem('userSaldo');
      localStorage.setItem('isLogin','false');
      // window.location.reload();
      Navigate('/signin');
    }
  return (
    <div className="MyProfile">
      <div className="Profile_identity">
        <span>{name}</span>
        <img src="/images/Profile.png" alt="" />
      </div>
      <div className="transaction_total">
        <span>CineCoins: </span>
        <span>
          {saldo} Cinecoins <img src="/images/CineCoins.png" alt="coin" />
        </span>
      </div>
      <div>
        <Link to="/myticket" className="Profile_myTicket">
            <span>My Ticket</span>
        </Link>
      </div>
        <Profile
          Title = "Email Address"
          Desc = {email}
        />
        <Profile
          Title = "Phone Number"
          Desc = {phone}
        />
        <button onClick={logout}>Log Out</button>
    </div>
  );
}
