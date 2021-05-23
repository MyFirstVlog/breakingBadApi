import React from 'react'
import useCharacter from '../../hooks/useCharacter'
import ListOfCharacters from '../../components/ListOfCharacters'
import getCharacter from '../../services/getCharacter'
export default function Home(){

  const {characters, page, setPage}= useCharacter()

  const handleNextPage =()=>{
    console.log('entre a paginacion')
    setPage(prevPage => prevPage + 1)
  }
  
 // const imagene = getCharacter()
  console.log('homecha', characters)
  
    return (
        <>
        
        <div className="App-main">
            <div className="App-results">
                <h3 className="App-title">Main Characters</h3>      
                <ListOfCharacters characters={characters} />                
            </div>            
        </div>
        <button className='btnAdd' onClick = {handleNextPage}>More Characters</button>
        </>
    )
}

// <button onClick = {handleNextPage}>Get next Page </button>




/**
 * 
 * <ListOfCharacters characters={characters} />
 import React from 'react'

export default function Home(){
    return (
        <>
        <div className="App-main">
            <div className="App-results">
                <h3 className="App-title">Última búsqueda</h3>       
            </div>            
        </div>
        </>
    )
}
 */




/*
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
*/