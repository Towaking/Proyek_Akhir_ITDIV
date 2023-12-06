
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Navbar_2 } from '../Navbar_2/Navbar_2'

export default function Failed() {
  return (
    <div className='Success'>
    <Navbar_2/>
    <div className="Success_container">
      <div className="Success_detail">
        <div className="Success_shown">
            <img src="/images/pngwing.com.png" alt="success" />
            <span>Payment Failed</span>
        </div>
        <div className="Success_summary">
            <div>Spiderman: Across The Spider Verse (Plaza Indonesia XXI)</div>
            <div>Total : 44 Cinecoins</div>
        </div>
        <div className="Success_button">
            <Link to="/">
                <button>Go Back To Menu</button>
            </Link>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}
