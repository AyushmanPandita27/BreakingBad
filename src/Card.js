import React from 'react';
 import './Card.css';

const Card = (props) => {
    
    return (
        <div className = ' button tc bg-light-green dib br3 pa3 ma2 grow bw2 shadows-5'>
        <img alt='robots' className = 'photo' src = {props.img}  />
        <div>
        <h1>Name: {props.name}</h1>
        <p>Date of Birth: {props.birthday}</p>
        <p>Occupation: {props.occupation}</p>
        <p>Status: {props.status}</p>
        <p>Portrayed By: {props.portrayed}</p>
        <p>Appearance(as per seasons): {props.appearance}</p>
</div>
</div>
    );
}

export default Card;