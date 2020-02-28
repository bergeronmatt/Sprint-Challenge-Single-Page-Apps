import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [characters, setCharacters] = useState([]);

 
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
const getChar = () => {
  axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
  .then(response =>{
    console.log(' look here dummy: ', response.data.results);
    setCharacters(response.data.results)
  })
  .catch(err =>{
    console.log('YO DAWG YOU GOT AN ERROR: ', err);
  });
  
}

getChar();
}, []);

  useEffect(() => {

    const results = characters.filter(character => 
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
        {searchResults.map(character => (
          <li key={character.name}>Results: {character.name}</li>
        ))}
        </ul>
      </div>
    </section>
  );
}


