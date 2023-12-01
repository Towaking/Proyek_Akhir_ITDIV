import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";

export default function MyProfile() {
    

    function isEdits(check : Number):boolean{

      return true;  
    }
  return (
    <div className="MyProfile">
      <div className="Profile_identity">
        <span>contohuser</span>
        <img src="/images/Profile.png" alt="" />
      </div>
      <div className="transaction_total">
        <span>CineCoins: </span>
        <span>
          54 Cinecoins <img src="/images/CineCoins.png" alt="coin" />
        </span>
      </div>
      <div>
        <Link to="/myticket" className="Profile_myTicket">
            <span>My Ticket</span>
        </Link>
      </div>
        <Profile
          Title = "Email Address"
          Desc = "contohuser@gmail.com"
        />
        <Profile
          Title = "Phone Number"
          Desc = "989232323"
        />
    </div>
  );
}
