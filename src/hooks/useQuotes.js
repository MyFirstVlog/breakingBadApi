import {useState, useEffect} from 'react'
import getQuotes from '../services/getQuotes'


export default function useQuotes({id}){

    const [quotes, setQuotes] = useState({})

    useEffect(function(){        
        getQuotes({id}).then(quote =>{
            setQuotes(quote)
        })
    },[ id])

    console.log('quote',quotes)
    
    return quotes
}
