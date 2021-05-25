import React from 'react'
import {Link} from 'wouter'
import Character from '../Character'
import Death from '../Death'
import './index.css'

export default function ListOfDeaths({characters}){
    let {listCharacters} = characters
    
    
        return <>
                  <div className="listOfCharacters"> {
                    characters.map((each)=>
                  
                        < Death                        
                            key={each.death_id}
                            death_id = {each.death_id}
                            death= {each.death}
                            responsible = {each.responsible}
                            season = {each.season}
                        /> 
                 
                    )
                }        
               </div>
                </>
}