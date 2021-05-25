import React from 'react'
import {Link} from 'wouter'
import Modal from '../Modal'
import Fav from '../Fav'
import './index.css'
export default function Character({char_id,img,name,status}){

    return (
        <div className="Character">

            <div className = "Character-buttons">
                    <Fav id = {char_id}></Fav>
            </div>
                        
                <Link to={`/img/${char_id}`} className='Character-link'>          
                        <img src={img}>  
                                             
                        </img>
                </Link>
                <small>Name: {name}</small>
                <small>Status:{status}</small>
                
               
                
        </div>
    )
}