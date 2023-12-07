import React from 'react'
import TransactionHistory from '../TransactionHistory/TransactionHistory'

export default function AllTransaction(props:any) {
  return (
    <div className='AllTransaction'>
        <TransactionHistory
            Title = {props.data.movName}
            Cinema = {props.data.cinName}
            Date = {props.data.showAir.split('T')[0]}
            Seat = {props.data.seatName}
            Order = {props.data.ticketID}
            Kode = "34197"
            Coin = "44"
        />
        <div className="lines"></div>
    </div>
  )
}
