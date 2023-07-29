import React from 'react';
import data from './Component/App/data';
import MobileCard from './Component/MobileCard/MobileCard';
import './App.css';
import Footer from "./Component/App/Footer";
import GreetingCard from './Component/GreetingCard';

// eslint-disable-next-line
import logo from './logo.svg';


function showAdditional(additional) {
  const greet="Greeting To React, ARUN'S REACT PROJECT ON MOBILES DETAILS, THIS IS displaying a greeting message "
  alert(greet)

  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};
function App() {
  return (
    <div className="wrapper">
      <h1>Mobiles</h1>
      {data.map(mob => (
        <MobileCard 
          key={mob.name}
          name={mob.name}
          Dimension={mob.Dimension}
          Battery={mob.Battery}
          price={mob.price}
          additional={mob.additional}
          showAdditional={showAdditional}
        />
      ))}
      <GreetingCard data="ARUN" className="greet"/>
      <Footer/>
    </div>  
      
  )
}

export default App;