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
    
    console.log('keyword',keyword)
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



    /*<header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
*/

/**
 * import React, {useState, useReducer} from 'react'
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
    
    console.log('keyword',keyword)
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

 */