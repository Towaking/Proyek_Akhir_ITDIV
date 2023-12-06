import React from 'react';
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';
import { Navbar_2 } from '../component/Navbar_2/Navbar_2';


export function Promotion() {
    return (
      <div>
        <Navbar_2 />
        <div className='promotion-container'>
            <h1>PROMOTION AND VOUCHER</h1>
            <div className='promo'>
                <div className='img-promo'>
                    <img src="/images/Group 4 1.png" alt="" />
                    <span className='text-promo'>buy one ticket and get one ticket. This promo can only be used from Monday to Wednesday. Only valid for CGV cinemas. Promo ends December 30, 2023</span>
                </div>
                <div className='img-promo'>
                    <img src="/images/Group 5 1.png" alt="" />
                    <span className='text-promo'>you will get 20% discount on popular films that week. Valid every day. Only valid at XXI cinemas. Promo ends December 30, 2023</span>
                </div>

            </div>
        </div>
        <Footer />
      </div>
    );
  }
export default Promotion;

