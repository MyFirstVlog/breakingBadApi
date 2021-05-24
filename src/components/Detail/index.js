import React from 'react'
import useQuotes from '../../hooks/useQuotes'
import useSingleCharacter from '../../hooks/useSingleCharacter'
import Character from '../Character'
import CharacterInd from '../CharacterInd'
let id = ''
export default function Detail({params}){
    const character = useSingleCharacter({id:params.id})
    id = id ? params.id : '1'
    console.log('antes de error',id)
    const quotes = useQuotes({id})

    if(character){
        return <>
                     <h3 className="App-title">{character.name}</h3>  
                     <CharacterInd key={character.char_id}
                            char_id= {character.char_id}
                            img = {character.img}
                            name = {character.name}
                            status = {character.status}
                            quotes = {quotes.quote}
                            />
    </>    
    }else{
        return null
    }
}

/**
 <h3 className="App-title">{character.name}</h3>
                <Character {...character} />

                <h3 className="App-title">Hola</h3>
                <div>{
                    < Character
                            key={character.char_id}
                            status = {character.status}
                            char_id= {character.char_id}
                            img = {character.img}
                            name = {character.name}
                    />
                    }                    
                </div>
 */