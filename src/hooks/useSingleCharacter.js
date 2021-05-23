import {useState, useEffect} from 'react'
import useCharacter from '../hooks/useCharacter'
import getSingleCharacter from '../services/getSingleCharacter'

export default function useSingleCharacter({id}){
    const characters = useCharacter()
    
    const characterCache = characters.find(single => single.char_id === id)
    
    const [character, setCharacter] = useState(characterCache)

    useEffect(function(){
        getSingleCharacter({id}).then(image => {
            
            setCharacter(image)
        })
    },[ id])

    console.log('esto es lo que devuleve geT en use After ', character)
    

    return character
} 