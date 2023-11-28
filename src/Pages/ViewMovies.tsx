import React from 'react';
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';
import { Link } from 'react-router-dom';

export function ViewMovies() {
    return (
      <div>
        <Navbar />
        <div className='movie-container'>
            <p>Top Movie This Week</p>
            <h1>Oppenheimer</h1>
            <div className='category'>
                <div className='category-item'>History</div>
                <div className='category-item'>Drama</div>
                <div className='category-item'>Biography</div>
            </div>
            <div className='score'>
                <div className='score-item'><img src="/images/Rating.png" alt="" /></div>
                <div className='score-item'>Score (8,5/10)</div>
            </div>
            <div className='desc'>
                The story of American scientist, J. Robert Oppenheimer, and
                 his role in the development of the atomic bomb.
            </div>
            <div className='btn'>
            <Link to="/Details">
                <button className='view-button'>View Detail</button>
             </Link>
            </div>
            
        </div>
        <div className='movies-container'>
            <div className='now-showing'>
                <h1>Now Showing</h1>
                <div className='movies-playing'>
                <img src="/images/spider.png" alt="gada" />
                <img src="/images/Rectangle 18.png" alt="gada" />
                <img src="/images/oppenheimer.png" alt="gada" />
            </div>
         </div>
        </div>
        <Footer />
      </div>
    );
  }
export default ViewMovies;