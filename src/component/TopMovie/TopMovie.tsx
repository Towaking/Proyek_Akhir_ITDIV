import React from 'react'
import { Link } from 'react-router-dom'
import Details from '../../Pages/Details';

export default function TopMovie(props:any) {
    var backgroundStyle = {
        backgroundImage: `url('images/transformer.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
        
    }
    console.log(backgroundStyle);
  return (
    <div className='movie-container' style={backgroundStyle}>
            <p>Top Movie This Week</p>
            <h1>{props.data.movName}</h1>
            <div className='category'>
                <div className='category-item'>{props.data.movGenre}</div>
            </div>
            <div className='score'>
                <div className='score-item'><img src="/images/Rating.png" alt="" /></div>
                <div className='score-item'>Score (8,5/10)</div>
            </div>
            <div className='desc'>
                {props.data.movDesc}
            </div>
            <div className='btn'>
            <Link to="/Details" state={props.data}>
                <button className='view-button'>View Detail</button>
             </Link>
            </div>
            
        </div>
  )
}
