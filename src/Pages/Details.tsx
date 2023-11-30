import React from 'react';
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export function Details() {
    const Navigate = useNavigate();
    const redirect = () => {
      Navigate('/book');
    }

    return (
      <div>
        <Navbar />
        <div className='detail-container'>
            <div className='detail-image'>
                <img src="/images/spider.png" alt="" />
            </div>
            <div className='details-container'>

            <h1>Spiderman: Across The Spider Verse</h1>
            <div className='category-details'>
                <div className='category-item'>Animation</div>
                <div className='category-item'>Action</div>
                <div className='category-item'>Adventure</div>
            </div>
            <div className='desc-details'>
            Miles Morales returns once again to save the multiverse! After being reunited with Gwen Stacy, Miles races across the multiverse to try and defeat a powerful foe known as the Spot. He meets many other spider people. But Miguel O'Hara doesn't approve of Miles' actions to save everyone, following canon events.
            </div>
            <div className='score'>
                <div className='score-item'><img src="/images/Rating.png" alt="" /></div>
                <div className='score-item'>Score (8,7/10)</div>
                <Link to="/book" style ={{width: 700}}>
                  <button className='buy-ticket-button' onClick={redirect}>Buy Ticket</button>
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

