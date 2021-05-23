import React from 'react'
import {Link} from 'wouter'
import './index.css'
export default function CharacterInd({char_id,img,name,status}){

    return ( <>
        <div className="CharacterInd">   
            <div className="imagen">
                        <img src={img}>                                                
                        </img>
            </div>   
            <div className="Quotes">
                
                <h3>{name}-{status}</h3>

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