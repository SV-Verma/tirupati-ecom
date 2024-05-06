import React from 'react'
import p from './images/my1.jpg'

const Owner = () => {
    return (
        <div className='owner'>
            <div className="owner-container">
                <div className="owner-image">
                    <img src={p} alt="" />
                </div>
                <div className="owner-details">
                    <h1>SHIVANGI VERMA</h1>
                    <p>
                        TIRUPATI JEWELLER's We crafting and customizing a wide range of SILVER, GOLD, DIOMOND items, making sure that you get to express your unique style without breaking the bank. We are committed to offering affordability without compromising on the quality of our work.
                    </p>
                    <h6> Customization:</h6>
                    <p>Have a dream design in mind? We bring your ideas to life. Our skilled goldsmiths will work closely with you to create personalized jewelry pieces that perfectly reflect your style and sentiment.
                    </p>
                    <h6>Jewelry Repairs:</h6>
                    <p>We understand the value of your treasured pieces. Our expert team can repair and restore your old or damaged jewelry to its former glory.</p>
                    <h6>Resizing:</h6>
                    <p>Whether it's an heirloom or a recent purchase, we can expertly resize rings and other jewelry items to ensure a perfect fit.</p>
                </div>
            </div>
        </div>
    )
}

export default Owner
