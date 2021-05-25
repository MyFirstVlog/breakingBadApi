import {useEffect, useState, useContext} from 'react'
import getCharacter from '../services/getCharacter'
import getDeath from '../services/getDeath'
import CharactersContext from '../context/CharactersContext'

const initialPage = 0

export default function useCharacter(status, rating){
    
    status = status ? status : 'characters'

    const {characters,setCharacters} = useContext(CharactersContext)

    const [page, setPage]= useState(initialPage)

    //const [characters,setCharacters] = useState('')
    useEffect(function(){
        getCharacter().then(images => {
            setCharacters(images)
        })
    },[setCharacters])


    useEffect(function(){
        
            if(page != initialPage){
              
                return getCharacter({page:page}).then(next =>{
                    setCharacters(prev => prev.concat(next))
                })
            }
        
        
    },[page])

    return {characters,page,setPage}

}
