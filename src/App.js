import React from 'react'
import {Link, Route, useLocation } from "wouter";
import Home from './pages/Home'
import Header from './components/Header'
import './App.css';
import { CharactersContextProvider } from './context/CharactersContext';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
        <Header/>
        <section className="App-content">
          <CharactersContextProvider>
              <Route path ='/' component = {Home}/>
              <Route path='/img/:id' component={Detail} />              
          </CharactersContextProvider>
        </section>
    </div>
  );
}

export default App;


