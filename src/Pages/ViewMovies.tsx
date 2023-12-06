import React, { useEffect, useState } from 'react';
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';
import { Link } from 'react-router-dom';
import { Navbar_2 } from '../component/Navbar_2/Navbar_2';
import axios from 'axios';
import ImageComponent from './ImageComponent';

export function ViewMovies() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://localhost:7262/api/Movie/NowShowing');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

    return (
      <div>
        <Navbar_2 />
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
                {/* <img src="/images/spider.png" alt="gada" />
                <img src="/images/Rectangle 18.png" alt="gada" />
                <img src="/images/oppenheimer.png" alt="gada" /> */}
                {movies.map((movie) => (
                  <ImageComponent imageBase64={movie.movPoster} />
                ))}
            </div>
         </div>
        </div>
        <Footer />
      </div>
    );
  }
export default ViewMovies;