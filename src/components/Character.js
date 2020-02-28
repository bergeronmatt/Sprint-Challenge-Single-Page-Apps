import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Character = (props) => {
    const [character, setCharacter] = useState();
    const {id} = useParams();

    useEffect(() => {
        const charID = id;

        axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${charID}`)
        .then(response =>{
            console.log('MORTY LOOK MORTY DATA: ', response);
            setCharacter(response.data.results)
          })
          .catch(err =>{
            console.log('YO DAWG YOU GOT AN ERROR: ', err);
          });
    },[id])

    const {name, status, species, type} = character;

    return(
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
    )

}

export default Character;