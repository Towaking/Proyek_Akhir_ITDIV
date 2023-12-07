import React, { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar/Navbar";
import { Footer } from "../component/Footer/Footer";
import Transaction from "./Transaction";
import MyTicket from "../component/MyTicket/MyTicket";
import AllTransaction from "../component/AllTransaction/AllTransaction";
import { Navbar_2 } from "../component/Navbar_2/Navbar_2";
import axios from "axios";

export default function MyTickets() {
    const [isSelected, setIsSelected] = useState(true);
    const [history, sethistory] = useState<any[]>([]); 

  useEffect(()=>{
    const userID = localStorage.getItem('userID');
    console.log(userID)
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`https://localhost:7262/api/Ticket/GetHistory?userID=${userID}`);
        sethistory(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchHistory();
  },[]);

  const myTicket = ()=> {
    return history.map((history)=>{
      return (
          <MyTicket data={history}/>
      )
    })
  }

  const Transaction = ()=>{
    return history.map((history)=>{
      return (
          <AllTransaction data={history}/>
      )
    })
  }

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
      <Navbar_2 />
      <div className="MyTickets_Container">
        <div className="MyTicket_detail">
          <span>MyTicket</span>
          <div className="MyTicket_History">
            <div className="MyTicket_HistoryTag">
                <span className={isSelected==true ? "MyTicket_Tags" : "" } onClick={()=>checkTag()}>Active Ticket</span>
                <span className={isSelected==false ? "MyTicket_Tags" : "" } onClick={()=>checkTag()}>All Transaction</span>
            </div>
            <>
              {isSelected==true ? myTicket() : Transaction() }
            </>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
