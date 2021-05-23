import React from 'react'
import useSingleCharacter from '../../hooks/useSingleCharacter'
import Character from '../Character'
import CharacterInd from '../CharacterInd'

export default function Detail({params}){
    const character = useSingleCharacter({id:params.id})
    
    console.log('impor data', character)
    if(character){
        return <>
                     <h3 className="App-title">{character.name}</h3>  
                     <CharacterInd {...character}/>
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