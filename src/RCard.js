import React from 'react'
import { Link } from 'react-router-dom';

const RCard = (props) => {
    return (
        <>
            <div className="Card-main">
                <div className="card-imgs">
                    <Link to={props.link}>
                        <img src={props.imgsrc} alt={props.imgsrc} />
                        <div className="card-text">
                            <p>{props.text}</p>
                            <span>{props.price}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RCard;
