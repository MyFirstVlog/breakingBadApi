import React from 'react'
import {Link} from 'wouter'
import Character from '../Character'
import './index.css'

export default function ListOfCharacters({characters}){
    let {listCharacters} = characters
    
    
        return <>
                  <div className="listOfCharacters"> {
                    characters.map((each)=>
                        < Character
                            key={each.char_id}
                            status = {each.status}
                            char_id= {each.char_id}
                            img = {each.img}
                            name = {each.name}
                        />    
                    )
                }        
               </div>
                </>
}
/**
 div className="listOfCharacters"> {
                    characters.map((each)=>
                        < Character
                            key={each.char_id}
                            status = {each.status}
                            img = {each.img}
                            name = {each.name}
                        />    
                    )
                }        
               </div>


               <div className='listOfCharacters'>
                       {
                           characters.map((each)=>
                           <Character
                                key={each.char_id}
                                char_id = {each.char_id}
                                img = {each.img}
                           />)
                       }
                   </div>
 */