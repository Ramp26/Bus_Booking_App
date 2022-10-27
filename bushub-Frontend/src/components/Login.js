import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'

import { withRouter } from 'react-router-dom'
import { UserContext } from '../App'
import "./Login.css"


function Login(props) {

const {state,dispatch} = useContext(UserContext);

    const [loginArr, setloginArr] = useState([])
    // let loginObj = props.loginObj
    // let setLoginObj = props.setLoginObj
    const [loginObj, setLoginObj] = useState({
        userName:'',
        password:''

    })
    
    const [superUserError, setsuperUserError] = useState('')
    const [isUserValid, setisUserValid] = useState(false)
    const [superPasswordError, setsuperPasswordError] = useState('')
    const [isPasswordValid, setisPasswordValid] = useState(false)

    const handleChange = (e) => {
        setLoginObj({
            ...loginObj,
            [e.target.name]: e.target.value
        })
        console.log('loginObj ->', loginObj);
    }


//password verification
const validatePassword = (password) => {
    if (password) {
        let pass = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$^&*]).{6,20}$/;
        if (password.match(pass)) {
            setisPasswordValid(false)
            setsuperPasswordError('*Please enter valid password')
            return false
  
        } else {
  
            setisPasswordValid(true)
            setsuperPasswordError('')
            return true
        }
    } else {
        setisPasswordValid(false)
        setsuperPasswordError('*Please enter your passowrd')
        return false
    }
  }


  //user name validation

const validateUserName = (name) => {
    if (name !== '') {
        let lName = (/^[a-zA-Z]+$/);
        if (name.match(lName)) {
            setisUserValid(true)
            setsuperUserError('')
            console.log(superUserError);
            return true
        } else {
            setisUserValid(false)
            setsuperUserError('*Please enter valid username')
            console.log(superUserError);
            return false
        }
    } else {
        setisUserValid(false)
        setsuperUserError('*Please enter your user name')
        console.log(superUserError);
        return false
    }
  }

    const handlelogin =  async(event) => {
        event.preventDefault()
     
        const isUserNameValid = validateUserName(loginObj.userName)
        const isPassValid = validatePassword(loginObj.password)
       
        if ( isPassValid === true && isUserNameValid === true  ) {
            setloginArr([
                ...loginArr,
                loginObj
            ])
      
            console.log("loginArr",loginArr);
            let res = await axios.post("http://localhost:8080/login",loginObj);
       
            console.log(res.data.error)
            if(res.data.error===null){
            
            
            localStorage.setItem("role",JSON.stringify(res.data.role));
            localStorage.setItem("jwt", JSON.stringify(res.data.jwt));
            console.log("hiiiii",res.status);
            // localStorage.setItem("role",JSON.stringify(res.data.role) );
         console.log(res.data.role);
            let role=localStorage.getItem("role");
            let roledata=JSON.parse(role)
            console.log(roledata[0].authority,"hiiioioi");
            if(roledata[0].authority=="ROLE_owner"){
              dispatch({type:"USER",payload:true})
            props.history.push("/homeowner");
            alert("login successfull");
            }else if(roledata[0].authority=="ROLE_admin"){
              dispatch({type:"USER",payload:true})
              props.history.push("/adminhome");
              alert("login successfull");
              setLoginObj({
                adminUserName: "",
                adminPassword: "",
              });
             
            }
          } else{
            alert(res.data.error);
          }
        }
      }
      


    return (
      <div className='back row'>
          <br/>
          <div className='col-5  '>

          <Card className='containers ' >
      <Card.Img variant="top" src="https://wallpapercave.com/wp/wp10821552.jpg" />
    
        <Card.Title>Your Bus</Card.Title>

      
    </Card>

          </div>
         
          <div className='col-6'>
            <form className='container log' >
              <div className='header'>
                <h1>Log-In</h1>
              </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">UserName</label>  
                 
                    <input type="text" className="form-control " id="exampleInputUserNmae" name='userName' value={loginObj.userName} onChange={(e) => { handleChange(e) }}/>
                    {!isUserValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superUserError}</span> : null}

                </div>

                <div className="form-group ">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={loginObj.password} onChange={(e) => { handleChange(e) }}/>
                    {!isPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superPasswordError}</span> : null}
                </div>


                <button  className="btn  mb-2"   onClick={handlelogin} >Login</button>
                <hr/>
             
              <button
              className='btn'
                variant="light"
                onClick={() => {
                  props.history.push("/reg");
                }}
              >
                If not Registered Please Register
              </button>
               
            </form>
            </div>

        </div>
    )
}

export default withRouter(Login)