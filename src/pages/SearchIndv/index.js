import React from 'react'
import useSingleCharacter from '../../hooks/useSingleCharacter'
import useQuotes from '../../hooks/useQuotes'
import CharacterInd from '../../components/CharacterInd'
import useSingleOne from '../../hooks/useSingleOne'

export default function SearchIndv({params}){
    console.log('params que me llegan', params)
    const {character,id} = useSingleOne({id:params.id})
    console.log('esta es la id qu eme llega', id)
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