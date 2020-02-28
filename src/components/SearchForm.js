import React, { useState, useEffect } from "react";
import axios from 'axios';
export default function SearchForm() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [characters, setCharacters] = useState([]);

 
  const character = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character')
    .then(response =>{
      setCharacters(response.data.results);
    })
  }

  useEffect(() => {

    const results = characters.filter(character => 
      character.toLowerCase().includes(searchTerm.toLowerCase())
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
          <li key={character}>{character}</li>
        ))}
        </ul>
      </div>
    </section>
  );
}
