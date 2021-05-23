import React from 'react'
import {Link} from 'wouter'
import './index.css'
export default function CharacterInd({char_id,img,name,status, quotes}){

    return ( <>
        <div className="CharacterInd">   
            <div className="imagen">
                        <img src={img}>                                                
                        </img>
            </div>   
            <div className="Quotes">
                
                <h1>{name}-{status}</h1>
                <p>{quotes}</p>

             </div>
        
        </div>
        
         </>
        
    )
}

/**
 * <div className="Quotes">
            <h3>Hola</h3>
        </div>
 */