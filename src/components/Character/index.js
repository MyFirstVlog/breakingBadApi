import React from 'react'
import {Link} from 'wouter'
import Modal from '../Modal'
import './index.css'
export default function Character({char_id,img,name,status}){

    return (
        <div className="Character">
            
            
                <Link to={`/img/${char_id}`} className='Character-link'>          
                        <img src={img}>  
                                             
                        </img>
                </Link>
                <small>Name: {name}</small>
                <small>Status:{status}</small>
                
               
                
        </div>
    )
}