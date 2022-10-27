import React, { useContext, useState } from 'react'
import './Navbar.css'

import {withRouter} from 'react-router-dom'
import HomeOwner from './owner/HomeOwner';
import { UserContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {

  const {state,dispatch} = useContext(UserContext);
const RenderMenu =()=>{

  if(state){
    return(
      <>
        {/* <li class="nav-item active">
        <a class="nav-link" href="/search">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item" >
        <a class="nav-link" href="/search">Search Buses</a>
      </li> */}
   
      <li class="nav-item active " >
    
    <a class=" log11" href="/logout"  ><button>Log-out</button> </a>
    </li>

 

      </>
    )
  }else{
    return(
      <>
             <li >
        <a class="nav-link" href="/"> <h6>Home</h6> <span class="sr-only">(current)</span></a>
      </li>

      <li  >
        <a class="nav-link" href="/search"> <h6>Search Buses</h6></a>
      </li>

      <li  >
      <a class="nav-link" href="/reg"><h6>Registration</h6></a>
      </li>

   
      <li   >
      <a class="log1" href="/login"><button>Log-in</button></a>
      </li>
      
      </>
    )
  }
}


  return (
    <div className='Nadiv'>
   
<nav class="navbar navbar-expand-lg   rock1">
  {/* <a class="navbar-brand" href="/">India's~Travel~Booking</a> */}
  
 
 

  <h1 class="navbar-brand " > India's~Travel~Booking</h1>
  <div class="collapse navbar-collapse" >
    <ul class="navbar-nav">
    
    <RenderMenu />

    </ul>
  </div>
</nav>




    </div>
  )
}

export default withRouter(Navbar);