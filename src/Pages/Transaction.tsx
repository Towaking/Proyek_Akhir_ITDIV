import React from "react";
import { Navbar } from "../component/Navbar/Navbar";
import { Footer } from "../component/Footer/Footer";
import { Link } from "react-router-dom";
import MyProfile from "../component/MyProfile/MyProfile";

export default function Transaction() {
    function random_num():String{
        var random = Math.floor(Math.random() * 9999999999999); 

        return random.toString();
    }
    return (
        <div className="Transaction">
            <Navbar />
            <div className="Transaction_Container">
                <div className="transaction_summary">
                    <div className="transaction_title">
                        <h1>Order Summary</h1>
                    </div>
                    <div className="book_upper_detail">
                        <div className="book_img">
                            <img src="/images/spider.png" id="spider_trans" alt="spider" />
                        </div>
                        <div className="book_detail">
                            <div className="book_details">
                                <div className="book_details_cinema">
                                    <div className="details_cinema" id="XXI">
                                        XXI
                                    </div>
                                </div>
                                <div className="book_details_title">
                                    <span>Spiderman : Across The Spider Verse</span>
                                </div>
                            </div>
                            <div className="book_schedule">
                                <div className="book_schedule_cinema">
                                    <span>Insert Cinema</span>
                                </div>
                                <div className="book_schedule_cinema">
                                    <span>Insert Time</span>
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
                            <span>C2</span>
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
                        <Link to="/book/success">
                            <button>Purchase</button>
                        </Link>
                        {/* <MyProfile/> */}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}
