import React from 'react'
import img from './images/brslt.png'
import img2 from './images/chains1.png'
import img3 from './images/kada2.png'

const NewArrivam = () => {
  return (
    <div className='newarriv'>
     <div className="newarriv-layout">
      <div className="newarrive-container">
        <div className="newarrive-main">
          <div className="new-imgicontainer">
            <div className="newarriv-img">
              <img src={img} alt="" />
            </div>
            <h3>Gold Bracelet</h3>
            <div className="newarriv-text">
              <p>Keep your style simple but classy with this linked pattern figaro bracelet,crafted in 18 karat gold</p>
            </div>
            <button>BRACELET's</button>
          </div>
          <div className="new-imgicontainer">
            <div className="newarriv-img">
              <img src={img2} alt="" />
            </div>
            <h3>Gold Chain</h3>
            <div className="newarriv-text">
              <p>Classy meets grace in this charming geometric pattern chain crafted in 18 karat yellow gold</p>
            </div>
            <button>CHAIN's</button>
          </div>
          <div className="new-imgicontainer">
            <div className="newarriv-img">
              <img src={img3} alt="" />
            </div>
            <h3>Gold Bangles</h3>
            <div className="newarriv-text">
              <p>Adorn your wrist with the subtle elegance of these 22 karat yellow gold bangles, an embodiment of refined minimalism for your daily adventures.</p>
            </div>
            <button>BANGLE's</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default NewArrivam
