import React, { useEffect, useState } from 'react'
import {useLocation} from 'wouter'
import useUser from '../../hooks/useUser'
let strAux = ''
export default function Comments(){
    const [username, setUsername] = useState('')
    const [texto, setTexto] = useState('')
    const [textoRead, setTextoRead] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()   
        strAux = strAux + `${username}->${texto}` + "\n"
        window.sessionStorage.setItem('value',strAux)
        setTextoRead(window.sessionStorage.getItem('value'))

    }
   
    return <>
        <form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nickname</label>
                <input type="text" onChange={e => setUsername(e.target.value)} value={username} class="form-control" id="exampleFormControlInput1" placeholder="NickName"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
                <textarea class="form-control" onChange={e => setTexto(e.target.value)}  value={texto} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>  
            <button onClick={handleSubmit} type="button" class="btn btn-warning">Save</button>
        </form> 
            <div class="mb-3">
                <label for="exampleRead" class="form-label">History</label>
                <textarea value={window.sessionStorage.getItem('value')}  class="form-control" id="exampleRead" rows="8" type="text" aria-label="Disabled input example" disabled readonly></textarea>
            </div>

        

        </>
    
}