import React, { useEffect, useState } from 'react'
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';
import { seat } from '../component/props/CinemaSeats';
import GetSeat from '../component/GetSeat/GetSeat';
import { Link, useNavigate } from 'react-router-dom';


export function BookTicket() {
  
  const [current,setcurrent] = useState('');
  const [seats,setseats] = useState('-');
  const Navigate = useNavigate();
  const Seat = seat;

  const get_ele = (ele:any) =>{
    setseats(ele);
  }

  function getSeat():any{
    return Seat.map((element,id) => {
        return (
          <GetSeat  element = {element} key={id} onClick={get_ele}/>
        )
    });
  }

  function button_pay(){
    if(seats.includes("-")){
      return false;
    }else{
      return true;
    }
  }

  return (
    <div className='bookticket'>
      <Navbar/>
      <section className='book_upper_detail'>
        <div className='book_img'>
          <img src='images/spider.png' alt='spider'/>
        </div>
        <div className="book_detail">
          <div className="book_details">
            <div className="book_details_title">
              <span>Spiderman : Across The Spider Verse</span>
            </div>
            <div className="book_details_genre">
              <div className="genres">Animation</div>
              <div className="genres">Action</div>
              <div className="genres">Adventure</div>
            </div>
            <div className="book_details_cinema">
              <div className="details_cinema" id='XXI'>XXI</div>
              <div className="details_cinema" id='CGV'>CGV</div>
              <div className="details_cinema" id='Cinepolis'>Cinepolis</div>

            </div>
          </div>
          <div className="book_schedule">
            <div className="book_schedule_cinema">
                <span>Choose Cinema</span>
                <select name="" id="">
                  <option value="" disabled selected hidden>Select the cinema you want to go to</option>
                  <option value="">Plaza Indonesia XXI</option>
                  <option value="">XXI</option>
                </select>
            </div>
            <div className="book_schedule_cinema">
                <span>Choose Schedule</span>
                <select name="" id="">
                  <option value="" disabled selected hidden>Select the cinema showtime Schedule</option>
                  <option value="">12:40</option>
                  <option value="">14:00</option>
                </select>
            </div>
          </div>
        </div>
      </section>
      <section className='book_lower_detail'>
        <span>Seat</span>
        <div className="book_seat">
          {getSeat()}
        </div>
        <div className="book_screen">Screen</div>
        <div className="book_aside">
          <div className="book_notes">
            <div className="book_taken"><div></div>Taken</div>
            <div className="book_available"><div></div>Available</div>
          </div>
          <div className="book_positions"><div>Positions:</div>{seats || "-"}</div>
        </div>
        <div className="book_payment">
          <Link to="/book/transaction">
            {button_pay() ? <button  disabled={!button_pay()}>Payment</button> : <br/>}
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default BookTicket;