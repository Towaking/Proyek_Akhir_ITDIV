import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export default function Success() {
  return (
    <div className='Success'>
    <Navbar/>
    <div className="Success_container">
      <div className="Success_detail">
        <div className="Success_shown">
            <img src="/images/pay_success.png" alt="success" />
            <span>Payment Success</span>
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
