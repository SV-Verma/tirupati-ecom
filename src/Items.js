import React from 'react'
import img from './images/diya-3.jpg'

const Items = () => {
  return (
    <div className='item'>
      <div className="item-layout">
          <div className="item-heading">
            <h2>NEW ARRIVAL</h2>
            <button>VIEW ALL</button>
          </div>
          <div className="item-container">
          <div className="item-container-card">
            <div className="item-img">
              <img src={img}alt="" />
            </div>
            <div className="tem-text">
              <p>text</p>
              <span>price</span>
            </div>
        </div>
        <div className="item-container-card">
            <div className="item-img">
              <img src={img}alt="" />
            </div>
            <div className="tem-text">
              <p>text</p>
              <span>price</span>
            </div>
        </div>
        <div className="item-container-card">
            <div className="item-img">
              <img src={img}alt="" />
            </div>
            <div className="tem-text">
              <p>text</p>
              <span>price</span>
            </div>
        </div>
        <div className="item-container-card">
            <div className="item-img">
              <img src={img}alt="" />
            </div>
            <div className="tem-text">
              <p>text</p>
              <span>price</span>
            </div>
        </div>
        <div className="item-container-card">
            <div className="item-img">
              <img src={img}alt="" />
            </div>
            <div className="tem-text">
              <p>text</p>
              <span>price</span>
            </div>
        </div>
        <div className="item-container-card">
            <div className="item-img">
              <img src={img}alt="" />
            </div>
            <div className="tem-text">
              <p>text</p>
              <span>price</span>
            </div>
        </div>
        <div className="item-container-card">
            <div className="item-img">
              <img src={img}alt="" />
            </div>
            <div className="tem-text">
              <p>text</p>
              <span>price</span>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Items
