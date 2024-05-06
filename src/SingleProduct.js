import React from 'react'
import chain from './images/chainss.png'
import ch from './images/chain211.jpg'
import ch1 from './images/chain22.png'
import ch2 from './images/chain12.png'
import { FaWhatsapp } from "react-icons/fa";


function SingleProduct() {
  return (
    <div className='SingleProduct'>
      <div className="sp-main">
        <div className="sp-layout">
          <div className="sp-container-left">
            <div className="sp-img-multiple">
              <img src={ch} alt="" />
              <img src={ch1} alt="" />
              <img src={ch2} alt="" />
            </div>
            <div className="sp-img-single">
              <img src={chain} alt="" />
            </div>
          </div>
          <div className="sp-container-right">
            <div className="sp-text1">
              <h1>chain </h1>
              <p>PRICE:</p>
            </div>

            <div className="sp-text-line"></div>

            <div className="sp-product-discription">
              <p>discription of product </p>
            </div>
            <div className="sp-btn">
              <button>Add To Cart</button>
            </div>
            <div className="sp-share-icon">
              SHARE: <FaWhatsapp />
            </div>
          </div>
        </div>
        <div className='sp-end-line'></div>
      </div>
    </div>
  )
}

export default SingleProduct
