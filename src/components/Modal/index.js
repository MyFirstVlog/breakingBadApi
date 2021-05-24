import React from 'react'

export default function Modal({name,status,responsible, season}){

    if(responsible){
        return(
            <>
                    
    
                    <button type="button" className="btn btn-primary btnInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Info
                    </button>
    
                   
    
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Biography</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <small>My Name is {name} and I'm {status}, I was Killed by {responsible} at season {season}</small>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
             
            </>
        )
    }
    else{
        return(
            <>
                    
    
                    <button type="button" className="btn btn-primary btnInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Info
                    </button>
    
                   
    
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Biography</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <small>{name}-{status}</small>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
             
            </>
        )
    }

    
}


