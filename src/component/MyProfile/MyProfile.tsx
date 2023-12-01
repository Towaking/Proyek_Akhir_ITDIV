import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MyProfile() {
    const [isedit,setisedit] = useState(false);
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
        <div className="Profile_email">
            <span>Email Address</span>
            <div className="Profile_edit">
                <span contentEditable={isedit}>contohuser@gmail.com  </span>
                <img src="/images/icon_pencil.png" alt="edit" onClick={()=>isedit==true ? setisedit(false) : setisedit(true)}/>
            </div>
        </div>
        <div className="Profile_phone">
            <span>Phone Number</span>
            <div className="Profile_edit">
                <span contentEditable={isedit}>08932674213 </span>
                <img src="/images/icon_pencil.png" alt="edit" onClick={()=>isedit==true ? setisedit(()=>false) : setisedit(()=>true)}/>
            </div>
        </div>
    </div>
  );
}
