import React, { useContext, useState } from 'react'

export function Sponsor() {

     const arr  = {
       "WeTV" : "images/wetv.png",
       "CGV" : "images/CGV.png",
       "XXI" : "images/XXI.png",
       "CINEPOLIS" : "images/CINEPOLIS.png",
       "Vidio" : "images/Vidio.png",
       "viu" : "images/Viu.png"
      }
      
  return (
    <section className='sponsor'>
      <div className="sponsor_title">
        <span>OUR PARTNERS</span>
      </div>
      <div className="sponsor_logo">
        <div className="sponsor_logo_top">
           <img src={arr.CGV} alt="sponsor" />
           <img src={arr.XXI} alt="sponsor" />
           <img src={arr.CINEPOLIS} alt="sponsor" />
           <img src={arr.Vidio} alt="sponsor" />
        </div>
        <div className="sponsor_logo_bot">
           <img src={arr.WeTV} alt="sponsor" />
           <img src={arr.viu} alt="sponsor" />

        </div>
      </div>
    </section>
  )
}
