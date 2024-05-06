import React from 'react'
import { Link } from 'react-router-dom';
import dy from './images/diya-3.jpg'


const PruductCard = () => {
  return (
    <div className='productcard'>
       <div className="product-card">
          <div className="thumbnail">
            <Link to="/">
            <img src={dy} />
           </Link>
          </div>
          <div className="prod-details">
            <span className="pd-name">product ring jewelry name</span>
            <span className="price">&#8377;499</span>
          </div>  
        </div>
    </div>
  )
}

export default PruductCard;
