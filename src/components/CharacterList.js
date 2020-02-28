import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChar = () => {
      axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response =>{
        console.log('MORTY LOOK MORTY DATA: ', response);
        setCharacters(response.data.results)
      })
      .catch(err =>{
        console.log('YO DAWG YOU GOT AN ERROR: ', err);
      });
      
    }

    getChar();
  }, []);

 

  return(
    <div className = "character-list">
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character}/>
      ))}
    </div>
  )  

}

function CharacterDetails({character}){
  const {name, status, species, type , id} = character;

  return(
    <Link to={`/character/${id}`}>
    <div className="character-card">
      <h2>{name}</h2>
      <div className="status">
        Status: {status}
      </div>
      <div className="species">
        Species: {species}
      </div>
      <div className="type">
        Type: {type}
      </div>
    </div>
    </Link>
  )

}