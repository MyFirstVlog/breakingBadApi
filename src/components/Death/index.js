import React from 'react'
import {Link} from 'wouter'
import Modal from '../Modal'
import './index.css'
export default function Death({death_id,death,responsible,season}){
   
    return (
        <div className="Character">           
                              
                        <img src='/tumba.png'/>   
                                   
                        <small>Name: {death}</small>
                        <small>Killed By: {responsible}</small>
                        <small>Season: {season}</small>
                      
        </div>
    )
}