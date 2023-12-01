import React from 'react'

export default function MyTicket() {
  return (
    <div className="MyTicket_Active">
              <div className="MyTicket_Upper">
                <div className="MyTicket_Up_Title">
                  <span>Spiderman: Across The Spider Verse</span>
                  <span>XXI</span>
                </div>
                <div className="MyTicket_Low_Title">
                  <div className="MyTicket_Low_Date">
                    <span className="MyTicket_Low_Head">Sabtu</span>
                    <span>25 Nov 2023</span>
                  </div>
                  <div className="MyTicket_Low_Places">
                    <span className="MyTicket_Low_Head">Bioskop</span>
                    <span>25 Nov 2023</span>
                  </div>
                  <div className="MyTicket_Low_Time">
                    <span className="MyTicket_Low_Head">Jam</span>
                    <span>12:40</span>
                  </div>
                </div>
              </div>
              <div className="MyTicket_Lower">
                <div className="MyTicket_Lower_Detail">
                  <div className="MyTicket_Lower_Book" id="MyTicket_code">
                    <span className="MyTicket_Lower_Head" >Kode Booking</span>
                    <span>1 Tiket</span>
                  </div>
                  <div className="MyTicket_Lower_Time" id="MyTicket_desc">
                    <span className="MyTicket_Lower_Head" >34917</span>
                    <span>C2</span>
                  </div>
                </div>
                <div className="MyTicket_Lower_Gerigi">
                    <div className="half_circle"></div>
                    <div className="half_circle"></div>
                    <div className="half_circle"></div>
                    <div className="half_circle"></div>
                    <div className="half_circle"></div>
                    <div className="half_circle"></div>
                    <div className="half_circle"></div>
                    <div className="half_circle"></div>
                    <div className="half_circle"></div>
                    <div className="half_circle"></div>
                </div>
              </div>
            </div>
  )
}
