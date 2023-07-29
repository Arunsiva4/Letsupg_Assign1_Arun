import React from 'react';
import './MobileCard.css'

export default function MobileCard({
    name,
    Dimension,
    Battery,
    price,
    showAdditional,
    additional,
}) {
  return (
    <div className='mobile-wrapper'>
        <h3> Name : {name}</h3>
        <h3> Dimen: {Dimension}</h3>
        <h3> Btry : {Battery}</h3>
        <div><h3>Price: {price.join(', ')}</h3></div>
        <button onClick={() => showAdditional(additional)}>More Info</button>
        
    </div>
  );
}