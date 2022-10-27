import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';
import './HomeOwner.css'


function HomeOwner() {
  const {state,dispatch} = useContext(UserContext);
  dispatch({type:"USER",payload:true})

const [username, setusername] = useState("")


useEffect(() => {
  let token = localStorage.getItem("jwt");
    
  let token1=JSON.parse(token);

  let jwtToken=`Bearer ${token1}`
  //converting and getting username from jwt token
  let userData = JSON.parse(atob(token.split(".")[1]));
  let username = userData.sub;
  setusername(username)

}, [])


  return (
    <div className='owner'>
      <nav id='alig'>
        <div className='logo'> owner {username}</div>
        <ul>
          <li><a href='/ownertabledata'> Work Space</a></li>
          <li><a href='#'> profile</a></li>
        </ul>


      </nav>
      <section></section>
     

  {/* <a className="navbar-brand" href="/ownertabledata"> */}
   

    </div>
  )
}

export default HomeOwner