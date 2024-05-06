import React from 'react'
import tl from './images/tlogo.png'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <h1>
        <img src={tl} alt="tl" />
        TiruPati Jeweller's
      </h1>
     
    </div>
    <div className='footer-end'>
    <p>
    Copyright© 2024 TiRuPaTi JeWeLLeRs - All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer;
