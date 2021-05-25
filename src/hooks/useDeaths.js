import {useEffect, useState, useContext} from 'react'
import getDeath from '../services/getDeath'
import CharactersContext from '../context/CharactersContext'

const initialPage = 0

export default function useDeaths(status, rating){
    status = status ? status : 'characters'

    const {characters,setCharacters} = useContext(CharactersContext)

    const [page, setPage]= useState(initialPage)

    useEffect(function(){
        getDeath().then(images => {
            setCharacters(images)
        })
    },[setCharacters])

    useEffect(function(){
        
        if(page != initialPage){
          
            return getDeath({page:page}).then(next =>{
                setCharacters(prev => prev.concat(next))
            })
        }   
    },[page])

    return {characters,page,setPage}
}