import React from 'react'
import {Link} from 'wouter'

export default function Header(){
    return(
        <>
            <header class="p-3 bg-dark text-white">
                <div class="container-fluid"> 
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end"> 
                    <Link to='/' class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <figure className="App-logo">
                        <img alt='logo'src="/heisenberg.png">
                            
                        </img>
                    </figure>
                    </Link>

                        <ul class="nav col-12 justify-content-center col-lg-auto me-lg-auto mb-2 mb-md-0">
                            <li><Link to='/'  class="nav-link px-2 text-white">Home</Link></li>   
                            <li><a href="#" class="nav-link px-2 text-white">Favs</a></li>
                            <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">User</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Log In</a></li>                          
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Log Out</a></li>
                            </ul>
                        </li>                       
                        <li><a href="#" class="nav-link px-2 text-white">About</a></li>
                        </ul>
                        
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
                        </form>

                        

                        <div class="text-end">
                            <button type="button" class="btn btn-outline-light me-2">Login</button>
                            <button type="button" class="btn btn-warning">Sign-up</button>
                        </div>                
                </div>
                </div>
            </header>
        </>
    )
}