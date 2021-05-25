import {useState, useEffect} from 'react'
import useCharacter from '../hooks/useCharacter'

import getSingleCharacter from '../services/getSingleCharacter'

export default function useSingleCharacter({id}){
    let listaF = []
    const characters = useCharacter()
    if (characters) listaF = characters.characters

    const characterCache = listaF.find(single => single.char_id === id)
    
    const [character, setCharacter] = useState(characterCache)
    

    useEffect(function(){
        getSingleCharacter({id}).then(image => {            
            setCharacter(image)
        })
        
    },[ id])

  

    return character
} 