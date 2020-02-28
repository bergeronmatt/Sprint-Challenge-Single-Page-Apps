import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import CharacterList from "./components/CharacterList.js";
import Character from "./components/Character.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
        <Header />
        <SearchForm/>
        <Route path="/" render={() => <CharacterList />} />
        <Route path='/Character:id' render = {() => <Character/>} />
    </main>
  );
}
