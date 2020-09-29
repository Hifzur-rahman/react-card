import React from 'react';


import './card.styles.css';

export const  Card = props => (
    <div className='card-container'>
        <img alt="program" src={`https://robohash.org/${props.programs.id}?set=set2&size=180x180`} />
        <h1>{props.programs.name}</h1>
        <p>{props.programs.email}</p>
    </div>
);