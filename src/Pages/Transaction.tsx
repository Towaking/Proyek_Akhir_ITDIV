import React from "react";
import { Navbar } from "../component/Navbar/Navbar";
import { Footer } from "../component/Footer/Footer";
import { Link, Navigate, redirect, useLocation, useNavigate } from "react-router-dom";
import MyProfile from "../component/MyProfile/MyProfile";
import { Navbar_2 } from "../component/Navbar_2/Navbar_2";
import axios from "axios";
import { seat } from "../component/props/CinemaSeats";

export default function Transaction() {
    const Navigate = useNavigate();
    const location = useLocation()
    const {data, seats, selectCinema, selectschedule} = location.state;

    function random_num():String{
        var random = Math.floor(Math.random() * 9999999999999); 

        return random.toString();
    }
    
    async function check(){
        const userID = localStorage.getItem('userID');
        const seatID = seats;
        try{
            console.log(userID);
            console.log(seatID);
            const response = await axios.post('https://localhost:7262/api/Ticket/MakeTicket',{
                userID: userID,
                seatID: seatID
            });
            if(response){
                Navigate('/book/success');
            }
        }catch(err){
            console.log(err);
            Navigate('/book/failed');
        }
    }

    return (
        <div className="Transaction">
            <Navbar_2 />
            <div className="Transaction_Container">
                <div className="transaction_summary">
                    <div className="transaction_title">
                        <h1>Order Summary</h1>
                    </div>
                    <div className="book_upper_detail">
                        <div className="book_img">
                            <img src={`data:image/png;base64,${data.movPoster}`} id="spider_trans" alt="spider" />
                        </div>
                        <div className="book_detail">
                            <div className="book_details">
                                <div className="book_details_cinema">
                                    <div className="details_cinema" id="XXI">
                                        XXI
                                    </div>
                                </div>
                                <div className="book_details_title">
                                    <span>{data.movName}</span>
                                </div>
                            </div>
                            <div className="book_schedule">
                                <div className="book_schedule_cinema">
                                    <span>{selectCinema}</span>
                                </div>
                                <div className="book_schedule_cinema">
                                    <span>{selectschedule}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transaction_order">
                        <span>Order ID: {random_num()} </span>
                    </div>
                    <div className="transaction_detail">
                        <div className="transaction_detail_left">
                            <span>1 Ticket</span>
                            <span>Regular Chair</span>
                            <span>Service Fee</span>
                        </div>
                        <div className="transaction_detail_right">
                            <span>{seats}</span>
                            <span>50 Cinecoins x 1</span>
                            <span>4 Cinecoins x 1</span>
                        </div>
                    </div>
                    <div className="transaction_promotions">
                        <span>Promotions</span>
                        <select name="" id="">
                            <option value="" style={{opacity:0.7}} hidden disabled selected  >Select Promotions</option>
                            <option value="">Free</option>
                        </select>
                    </div>
                    <div className="transaction_total">
                        <span>Total Price: </span>
                        <span>54 Cinecoins <img src="/images/CineCoins.png" alt=""  /></span>
                    </div>
                    <div className="transaction_payment">
                        <button onClick={check}>Purchase</button>
                        {/* <MyProfile/> */}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}
