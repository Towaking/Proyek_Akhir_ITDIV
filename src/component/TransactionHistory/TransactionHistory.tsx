import React from 'react'

export default function TransactionHistory({Title, Cinema, Date, Seat, Order, Kode, Coin}:any) {
  return (
    <div className="TransactionHistory">
        <div className="History_Date">{Date}</div>
        <div className="History_detail">
            <div className="History_desc">
                <span>{Title} ({Cinema})</span>
                <span>Seat : {Seat}</span>
                <span>Order ID: {Order}</span>
                <span>Kode Booking : {Kode}</span>
            </div>
            <div className="History_coin">
                {Coin} CineCoins
            </div>
        </div>
    </div>
  )
}
