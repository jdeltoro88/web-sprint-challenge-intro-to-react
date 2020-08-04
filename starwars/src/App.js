import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";

// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


const App = () => {
  
  const [character, setCharacter] = useState([]);
  

  useEffect(() => {
   
      axios.get(`https://swapi.dev/api/people/`)
      .then(response => { 
        setCharacter(response.data.results);
        
      })
      .catch(error => console.log('Error!', error));
    
    
  } , []);

  
  
  
  
  if(!character) return <h1>Loading</h1>
  return (
    <div className="App">
      <h1 className="Header" style={{fontSize: '4rem'}} >STAR WARS REACT</h1>
      
       {character.map((char ) => {

        return <Character character={char}/>

       })}
      
    </div>
  );
}

export default App;