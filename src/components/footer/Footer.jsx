import React from 'react'
import logo from "../../assets/logo.svg"

import fbIcon from "../../assets/icon-facebook.svg"
import ytIcon from "../../assets/icon-youtube.svg"
import twiIcon from "../../assets/icon-twitter.svg"
import pintIcon from "../../assets/icon-pinterest.svg"
import igIcon from "../../assets/icon-instagram.svg"

import "./Footer.css"


const Footer = () => {
  return (
    <>
      <div className='footer-section'>

        <div className='footer-overview '>

          <div className='logoXicon'>
            <div className='logo'>
              {/* INSRT IMG */}

              <img src={logo} alt="" />
            </div>
            
            <div className="icons">
              <img src={fbIcon} alt="" />
              <img src={ytIcon} alt="" />
              <img src={twiIcon} alt="" />
              <img src={pintIcon} alt="" />
              <img src={igIcon} alt="" />
            </div>

            {/* INS  ICON*/}
          </div>

          <div className="footer-links">

            <div className="link1">

              <a href="">About Us</a>
              <a href="">Contact</a>
              <a href="">Blo</a>
            </div>

            <div className="link1">

              <a href="">Careers</a>
              <a href="">Support</a>
              <a href="">Privacy Policy</a>
            </div>

          </div>

          <div className='buttonXcopyright'>

            <button>Request Invite</button>

            <p>&copy; Easybank. All Rights Reserved</p>
          </div>

        </div>

      </div>

    </>
  )
}

export default Footer
