import React, {useState, useReducer} from 'react'
import {Link, useLocation} from 'wouter'
import SearchResults from '../../pages/SearchResults'
const condition = ['deceased','alive']

const reducer = (state, params) =>{ //actualiza ele stado dependiendo de als condiciones de params
   
  return {
      ...state ,
      keyword : params.id,   
      
      
  }}


  function SearchForm({initialKeyword='1', initialStatus='alive'}){

    const [Status, setStatus] = useState(initialStatus)
    const [state, dispatch] = useReducer(reducer,{
      keyword:decodeURIComponent(initialKeyword)
    })
    const {keyword, status} = state
    const [path, pushLocation] = useLocation()
    
   
    const updateKeyword = (keyword) =>{
      dispatch(keyword) 
     } 

    const handleSubmit = evt =>{
      evt.preventDefault()
      pushLocation(`/ind/img/${keyword}`)
      //navegar
    }
    const handleChange = evt =>{
      updateKeyword(evt.target.value)
      //setTimes(times + 1)      
    }
    const handleChangeStatus = evt =>{
      setStatus(evt.target.value)
    }

    return (
      <form onSubmit={handleSubmit} class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">     
        <input onChange={handleChange} value={keyword} type="search" class="form-control form-control-dark" placeholder="Search Character" aria-label="Search"/>        
      </form>
    )

}

export default React.memo(SearchForm )


