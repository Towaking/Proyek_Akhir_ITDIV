import React, { useEffect, useState } from 'react';
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';
import { Link } from 'react-router-dom';
import { Navbar_2 } from '../component/Navbar_2/Navbar_2';
import axios from 'axios';
import ImageComponent from './ImageComponent';
import TopMovie from '../component/TopMovie/TopMovie';
import { seat } from '../component/props/CinemaSeats';

export function ViewMovies() {
  const [movies, setMovies] = useState<any[]>([]);
  const [PopularMovies, setPopularMovies] = useState<any[]>([]); 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://localhost:7262/api/Movie/NowShowing');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get('https://localhost:7262/api/Movie/PopularMovie');
        setPopularMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
    fetchPopularMovies();
  }, []);

    return (
      <div>
        <Navbar_2 />
        {PopularMovies.map((popularMovies) =>{
          return(
            <TopMovie data={popularMovies}/>
          )
        })}
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