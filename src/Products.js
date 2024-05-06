import React from 'react'
import img from './images/ringset.jpg'
import img1 from './images//pendent1.png'
import img2 from './images/earring12.png'


const Products = () => {
  return (
    <div className='newarriv'>
    <div className="newarriv-layout">
     <div className="newarrive-container">
       <div className="newarrive-main">
         <div className="new-imgicontainer">
           <div className="newarriv-img">
             <img src={img} alt="" />
           </div>
           <div className="product-text">
           <h3>RING's</h3>
             {/* <p>text</p> */}
           <button>Explore</button>
           </div>
         </div>
         <div className="new-imgicontainer">
           <div className="newarriv-img">
             <img src={img1} alt="" />
           </div>
           <div className="product-text">
           <h3>PENDENT's</h3>
             {/* <p>text</p> */}
           <button>Explore</button>
           </div>
         </div>
         <div className="new-imgicontainer">
           <div className="newarriv-img">
             <img src={img2} alt="" />
           </div>
           <div className="product-text">
           <h3>EAR RING</h3>
             {/* <p>text</p> */}
           <button>Explore</button>
           </div>
         </div>
       </div>
     </div>
    </div>
   </div>
  )
}

export default Products
