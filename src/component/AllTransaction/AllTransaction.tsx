import React from 'react'
import TransactionHistory from '../TransactionHistory/TransactionHistory'

export default function AllTransaction() {
  return (
    <div className='AllTransaction'>
        <TransactionHistory
            Title = "Spiderman: Across The Spider Verse"
            Cinema = "Plaza Indonesia XXI"
            Date = "25 Nov 2023"
            Seat = "C2"
            Order = "1293812938"
            Kode = "34197"
            Coin = "44"
        />
        <div className="lines"></div>
        <TransactionHistory
            Title = "Oppenheimer"
            Cinema = "Plaza Indonesia XXI"
            Date = "24 Nov 2023"
            Seat = "D3"
            Order = "1293812938"
            Kode = "34197"
            Coin = "44"
        />
    </div>
  )
}
