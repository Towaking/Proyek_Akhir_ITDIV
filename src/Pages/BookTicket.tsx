import React, { useEffect, useState } from 'react'
import { Footer } from '../component/Footer/Footer';
import { seat } from '../component/props/CinemaSeats';
import GetSeat from '../component/GetSeat/GetSeat';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar_2 } from '../component/Navbar_2/Navbar_2';


export function BookTicket() {
  
  const [current,setcurrent] = useState('');
  const [seats,setseats] = useState('-');
  const [selectCinema,setselectCinema] = useState<string>();
  const [selectschedule,setselectschedule] = useState<string>();
  const Navigate = useNavigate();
  const Seat = seat;
  const location = useLocation();
  const data  = location.state;
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
  console.log(selectCinema)
  console.log(selectschedule)
  console.log(seats)

  function button_pay(){
    if(seats.includes("-")){
      return false;
    }else{
      return true;
    }
  }

  return (
    <div className='bookticket'>
      <Navbar_2/>
      <section className='book_upper_detail'>
        <div className='book_img'>
          <img src={`data:image/png;base64,${data.movPoster}`} alt='spider'/>
        </div>
        <div className="book_detail">
          <div className="book_details">
            <div className="book_details_title">
              <span>{data.movName}</span>
            </div>
            <div className="book_details_genre">
              <div className="genres">{data.movGenre}</div>
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
                <select value={selectCinema} onChange={e=>setselectCinema(e.target.value)}>
                  <option disabled selected hidden>Select the cinema you want to go to</option>
                  <option >Plaza Indonesia XXI</option>
                  <option >XXI</option>
                </select>
            </div>
            <div className="book_schedule_cinema">
                <span>Choose Schedule</span>
                <select value={selectschedule} onChange={e=>setselectschedule(e.target.value)}>
                  <option  disabled selected hidden>Select the cinema showtime Schedule</option>
                  <option >12:40</option>
                  <option >14:00</option>
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
          <Link to="/book/transaction" state={{data, seats ,selectCinema,selectschedule}}>
            {button_pay() ? <button  disabled={!button_pay()}>Payment</button> : <br/>}
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default BookTicket;