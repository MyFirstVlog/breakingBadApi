import React from 'react'
import ListOfDeaths from '../../components/ListOfDeaths'
import useCharacter from '../../hooks/useCharacter'
import useDeaths from '../../hooks/useDeaths'


export default function SearchResults({params}){
    const {name, status='characters'} = params
    
    const {characters,page,setPage} = useDeaths(status)
    

    const handleNextPage =()=>{
        
        setPage(prevPage => prevPage + 1)
      }
     
  
    return (
        <>
        
        <div className="App-main">
            <div className="App-results">
                <h3 className="App-title">Deaths</h3>      
                <ListOfDeaths characters={characters} />                
            </div>            
        </div>        
        </>
    )
}