import React from 'react'
import {Link, Route, useLocation } from "wouter";
import Home from './pages/Home'
import Header from './components/Header'
import './App.css';
import { CharactersContextProvider } from './context/CharactersContext';
import Detail from './components/Detail';
import SearchResults from './pages/SearchResults';
import SearchForm from './components/SearchForm';
import SearchIndv from './pages/SearchIndv';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <section className="App-content">
          <CharactersContextProvider>
              <Route path ='/' component = {Home}/>
              <Route path ='/ind/img/:id' component = {SearchIndv}/>
              <Route path='/img/:id' component={Detail} />  
              <Route path ='/search/:name/:status' component ={SearchResults}/>            
          </CharactersContextProvider>
        </section>
    </div>
  );
}

export default App;


