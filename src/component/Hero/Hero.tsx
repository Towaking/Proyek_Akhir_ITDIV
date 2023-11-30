import React from 'react'
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className='hero'>
      <div className="hero_main">
        <div className="hero_title">
            <h1>Welcome to Cinemate</h1>
        </div>
        <div className="hero_desc">
            <p>Step into a world of cinematic enchantment – 
                where stories unfold and memories are made; book your tickets 
                now at Cinemate for an unforgettable movie experience!</p>
        </div>
        <div className="hero_button">
            <Link to="/viewmovies">
              <button>view movies</button>
             </Link>
        </div>
      </div>
    </div>
  ) 
}
