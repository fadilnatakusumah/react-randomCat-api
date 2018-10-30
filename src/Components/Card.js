import React from 'react';
import './Card.css';


const Card = ({email, name, id, username}) => {
    return(
        <div className=" tc bg-light-purple dib br2 pa3 ma2 grow bw2 shadow-5">
            <img className="br2" src={`https://cataas.com/cat/says/${id}`} alt=""/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{username}</p>
            </div>
        </div>
    )

    
}

export default Card;