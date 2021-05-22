import React from 'react'
import {Link, Route, useLocation } from "wouter";
import Home from './pages/Home'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <section className="App-content">
              <Route path ='/' component = {Home}/>
        </section>
    </div>
  );
}

export default App;


