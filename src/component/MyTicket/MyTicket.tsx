
export default function MyTicket(props:any) {
  return (
    <div className="MyTicket_Active">
              <div className="MyTicket_Upper">
                <div className="MyTicket_Up_Title">
                  <span>{props.data.movName}</span>
                  <span>XXI</span>
                </div>
                <div className="MyTicket_Low_Title">
                  <div className="MyTicket_Low_Date">
                    <span className="MyTicket_Low_Head">Sabtu</span>
                    <span>{props.data.showAir.split('T')[0]}</span>
                  </div>
                  <div className="MyTicket_Low_Places">
                    <span className="MyTicket_Low_Head">Bioskop</span>
                    <span>{props.data.cinName}</span>
                  </div>
                  <div className="MyTicket_Low_Time">
                    <span className="MyTicket_Low_Head">Jam</span>
                    <span>{props.data.showAir.split('T')[1]}</span>
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
                    <span>{props.data.seatName}</span>
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
