import {useEffect, useState, useContext} from 'react'
import getCharacter from '../services/getCharacter'
import CharactersContext from '../context/CharactersContext'
export default function useCharacter(){
    const {characters,setCharacters} = useContext(CharactersContext)
    //const [characters,setCharacters] = useState('')
    useEffect(function(){
        getCharacter().then(images => {
            setCharacters(images)
        }).catch(console.error("vacio"))
    },[setCharacters])
    console.log('charactersUse',characters)
    return characters
}