import React from 'react'
import {Link, Route, useLocation } from "wouter";
import Home from './pages/Home'
import Header from './components/Header'
import './App.css';
import { CharactersContextProvider } from './context/CharactersContext';
import Detail from './components/Detail';
import SearchResults from './pages/SearchResults';

import SearchIndv from './pages/SearchIndv';
import { UserContextProvider } from './context/UserContextProvider';
import LoginPage from './pages/Login';
import FavsPage from './pages/FavsPage';

function App() {
  return (
    <UserContextProvider>
    <div className="App">
        <Header></Header>
        <section className="App-content">
          <CharactersContextProvider>
              <Route path ='/' component = {Home}/>
              <Route path='/favspage' component = {FavsPage}/>
              <Route path ='/ind/img/:id' component = {SearchIndv}/>
              <Route path='/img/:id' component={Detail} />  
              <Route path ='/search/:name/:status' component ={SearchResults}/>   
              <Route path ='/login' component = {LoginPage}/>         
          </CharactersContextProvider>
        </section>
    </div>
    </UserContextProvider>
  );
}

export default App;


