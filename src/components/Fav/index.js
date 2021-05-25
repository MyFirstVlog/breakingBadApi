import React, { useState } from 'react'
import {useLocation} from 'wouter'
import useUser from '../../hooks/useUser'
import Login from '../../components/Login'
import './Fav.css'
import Modal from '../Modal'
var global
export default function Fav ({id}){
    const {isLogged,fav, favs} = useUser()
    const [, navigate] = useLocation()

   
    const handleClick = () =>{
        if(!isLogged) return navigate('/login')
        
        fav({id})
        
    }
    global = id
   
    const isFaved = favs.some(favId => favId == global) 
   

    const [label, emoji] =isFaved ? ['Remove','❎'] : ['Remove','😍'] 


    

            return( 
                <>
                
                <button className='gf-Fav' onClick={handleClick}>
                    <span aria-label={label} role='img'>{emoji}</span>
                </button>
     
                </>)
}


