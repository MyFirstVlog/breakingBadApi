import {useState, useEffect} from 'react'
import useCharacter from '../hooks/useCharacter'

import getSingleCharacter from '../services/getSingleCharacter'

let listaF = []
export default function useSingleOne({id}){
    
    const apiLink = 'https://www.breakingbadapi.com/api/characters'
    
    const laFetch = fetch(apiLink)
    .then(res => res.json())
    .then(response =>{
            const data = response
            const images = data.map((image)=>{
                const {img,status,name,char_id} = image
                return {img,status,name,char_id}

            })
            return images
          
            
        }).then((evt)=>listaF = evt)

        console.log('laFetch12',listaF)
    
  
    
   
    id = id.replace('%20',' ')
    let loc = id.lastIndexOf('%20')
    while(loc != -1){
        id = id.replace('%20',' ')
        loc = id.lastIndexOf('%20')
    }
    console.log('id que sale del while',id)
    
    /*const characters = useCharacter()
    if (characters) listaF = characters.characters*/
    console.log('problema de fun', listaF)
    const characterCache = listaF.find(single => single.name === id)
    if(characterCache){
    console.log('id', characterCache.char_id)
    id = characterCache.char_id
    }else{
        id=1
    }
    const [character, setCharacter] = useState(characterCache)
    

    useEffect(function(){
        getSingleCharacter({id}).then(image => {            
            setCharacter(image)
        })
        
    },[ id])

    

  

    return {character,id}
} 