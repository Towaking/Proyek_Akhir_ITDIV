import React, { useState } from "react";
import { Navbar } from "../component/Navbar/Navbar";
import { Footer } from "../component/Footer/Footer";
import Transaction from "./Transaction";
import MyTicket from "../component/MyTicket/MyTicket";
import AllTransaction from "../component/AllTransaction/AllTransaction";

export default function MyTickets() {
    const [isSelected, setIsSelected] = useState(true);
    function checkTag(){
        if(isSelected){
            setIsSelected(()=>false);
        }
        else{
            setIsSelected(()=>true);
        }
    }
  return (
    <div className="MyTickets">
      <Navbar />
      <div className="MyTickets_Container">
        <div className="MyTicket_detail">
          <span>MyTicket</span>
          <div className="MyTicket_History">
            <div className="MyTicket_HistoryTag">
                <span className={isSelected==true ? "MyTicket_Tags" : "" } onClick={()=>checkTag()}>Active Ticket</span>
                <span className={isSelected==false ? "MyTicket_Tags" : "" } onClick={()=>checkTag()}>All Transaction</span>
            </div>
            {isSelected==true ? <MyTicket/> : <AllTransaction/> }
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
