import React from 'react'
import Comments from '../../components/Comment'
export default function FavsPage(){
    

    return <> 
       <Comments/>
    </>
}

/**
 * <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nickname</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>  
                       




            <div className="App-main">
            <div className="App-results">       

   

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nickname</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>  
                               
                             
            </div>            
        </div>







        let nickname = document.getElementById('exampleFormControlInput1').value
    let comment = document.getElementById('exampleFormControlTextarea1').value
    let history = document.getElementById('exampleRead')

    const handleSubmit = evt =>{
        evt.preventDefault()
        handleInput()
        
      }
    const handleChange = evt  =>{
      let a = evt.target.value
      console.log('change')
    }

    const handleInput = () =>{
        history.value = `${nickname}->${comment}`
    }
 */
