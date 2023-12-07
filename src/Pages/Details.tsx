import React from 'react';
import { Navbar_2 } from '../component/Navbar_2/Navbar_2'
import { Footer } from '../component/Footer/Footer';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export function Details() {
    const Navigate = useNavigate();
    const location = useLocation();
    const data  = location.state;
    console.log(data);
    return (
      <div>
        <Navbar_2 />
        <div className='detail-container'>
            <div className='detail-image'>
                <img src={`data:image/png;base64,${data.movPoster}`} alt="" />
            </div>
            <div className='details-container'>

            <h1>{data.movName}</h1>
            <div className='category-details'>
                <div className='category-item'>{data.movGenre}</div>
            </div>
            <div className='desc-details'>
              {data.movDesc}
            </div>
            <div className='score'>
                <div className='score-item'><img src="/images/Rating.png" alt="" /></div>
                <div className='score-item'>Score (8,7/10)</div>
                <Link to="/book" style ={{width: 700}} state={data}>
                  <button className='buy-ticket-button' >Buy Ticket</button>
                </Link>
            </div>
            
        </div>
        
        </div>
        <div className='cast-images'>
        <h1>TOP CAST</h1>
        <div className="grid-container">
          <div className="cast-item">
            <img src="/images/Ellipse 12.png" alt="" />
            <span className="text">Shameik Moore</span>
          </div>
          <div className="cast-item">
            <img src="/images/Ellipse 13.png" alt="" />
            <span className="text">Hailee Steinfeld</span>
          </div>
          <div className="cast-item">
            <img src="/images/Ellipse 14.png" alt="" />
            <span className="text">Brian Tyree Henry</span>
          </div>
          <div className="cast-item">
            <img src="/images/Ellipse 15.png" alt="" />
            <span className="text">Luna Lauren Velez</span>
          </div>
          <div className="cast-item">
            <img src="/images/Ellipse 16.png" alt="" />
            <span className="text">Jake Johnson</span>
          </div>
          <div className="cast-item">
            <img src="/images/Ellipse 17.png" alt="" />
            <span className="text">Oscar Isaac</span>
          </div>
        </div>
            <div className='image-container'>
                <h1>PHOTOS</h1>
                <div className='photos'>
                    <img src="/images/Rectangle 123.png" alt="" />
                    <img src="/images/Rectangle 124.png" alt="" />
                    <img src="/images/Rectangle 125.png" alt="" />
                </div>
            </div>
        
      </div>
        
        
       
        <Footer />
      </div>
    );
  }
export default Details;

