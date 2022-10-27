import React, { useContext } from 'react'
import { UserContext } from '../App'



function Logout() {

    
  const {state,dispatch} = useContext(UserContext);
 
  dispatch({type:"USER",payload:false})



  
  return (
    <div>
{localStorage.clear()}

{/* {  localStorage.removeItem("role")} */}
{/* {localStorage.removeItem("jwt")} */}
<a href='/'> Back to Home</a>
    </div>
  )
}

export default Logout