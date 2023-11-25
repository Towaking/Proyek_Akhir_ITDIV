
import React from "react";

export function Footer() {

  const logo = "/images/CinemateLogo.png";
  const fb = "/images/facebook.png";
  const twitter = "/images/twitter.png";
  const instagram = "/images/instagram.png";

  return (
    <footer className="footer">
      <div className="footer_main">
        <div className="footer_logo_desc">
          <img src={logo} alt="logo"/>
          <span>Cinemate: Your best choice
             for hassle-free web ticket booking.
          </span>
        </div>
        <div className="footer_shortcut">
            <a href="#">POPULAR MOVIES</a>
            <a href="#">PROMOTIONS</a>
            <a href="#">ABOUT US</a>
        </div>
        <div className="footer_contact">
          <span>FOLLOW US</span>
          <div className="footer_contact_img">
              <img src={fb} />
              <img src={instagram} />
              <img src={twitter} />
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <span>2023 CINEMATE, ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}
