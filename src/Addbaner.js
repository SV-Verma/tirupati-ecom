import React from 'react'
import bg from './images/ring1.avif'
import { MdOutlineArrowRight } from "react-icons/md";

const Addbaner = () => {
  return (
    <div className="about-products">
      <div className="about-product-cpntainer">
        <div className="about-products-inner">
          <p className='api-p1'>SUPPORT</p>
          <p className='api-p'>about products details and menufacturing</p>
          <p className='api-p'>about products details and menufacturing</p>

        </div>
        <div className="about-products-details">
          <div className="about-products-peace">
            <div className="about-products-img">
              <img src={bg} alt="" />
            </div>
            <div className="about-products-text">
              <h1>GOLD</h1>
              <p>prodct details</p>
              <a href="/">learn More
                <MdOutlineArrowRight />
              </a>
            </div>
          </div>

          <div className="about-products-peace">
            <div className="about-products-img">
              <img src={bg} alt="" />
            </div>
            <div className="about-products-text">
              <h1>SILVER</h1>
              <p>prodct details</p>
              <a href="/">learn More
                <MdOutlineArrowRight />
              </a>
            </div>
          </div>

          <div className="about-products-peace">
            <div className="about-products-img">
              <img src={bg} alt="" />
            </div>
            <div className="about-products-text">
              <h1>DAIMOND</h1>
              <p>prodct details</p>
              <a href="/">learn More
                <MdOutlineArrowRight />
              </a>
            </div>
          </div>

          <div className="about-products-peace">
            <div className="about-products-img">
              <img src={bg} alt="" />
            </div>
            <div className="about-products-text">
              <h1>GEM's</h1>
              <p>prodct details</p>
              <a href="/">learn More
                <MdOutlineArrowRight />
              </a>
            </div>
          </div>

          <div className="about-products-peace">
            <div className="about-products-img">
              <img src={bg} alt="" />
            </div>
            <div className="about-products-text">
              <h1>GOLD BISCUIT</h1>
              <p>prodct details</p>
              <a href="/">learn More
                <MdOutlineArrowRight />
              </a>
            </div>
          </div>

          <div className="about-products-peace">
            <div className="about-products-img">
              <img src={bg} alt="" />
            </div>
            <div className="about-products-text">
              <h1>GOLD & SILVER COINs</h1>
              <p>prodct details</p>
              <a href="/">learn More
                <MdOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Addbaner
