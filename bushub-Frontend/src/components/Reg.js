import React, { useState } from 'react'

import {withRouter} from 'react-router-dom'
import axios from 'axios'

import './Reg.css'
function Reg(props) {

  const [superArr, setsuperArr] = useState({})

  const [superObj, setsuperObj] = useState({
    name:'',
    contact:'',
    address:'',
    userName:'',
    password:'',
    cpassword:'',
     role:'',

  })


  const [superConfirmPasswordError, setsuperConfirmPasswordError] = useState('')
  const [isConfirmPasswordValid, setConfirmisIdValid] = useState(false)
  const [superNameError, setsuperNameError] = useState('')
  const [isNameValid, setisNameValid] = useState(false)
  const [superPhoneError, setsuperPhoneError] = useState('')
  const [isPhoneValid, setisphoneValid] = useState(false)
  const [superAddressError, setsuperAddressError] = useState('')
 const [isAddressValid, setisAddressValid] = useState(false)
  const [superRoleError, setsuperRoleError] = useState('')
  const [isRoleValid, setisRoleValid] = useState(false)
  const [superUserError, setsuperUserError] = useState('')
  const [isUserValid, setisUserValid] = useState(false)
  const [superPasswordError, setsuperPasswordError] = useState('')
  const [isPasswordValid, setisPasswordValid] = useState(false)

  const handleChange = (e) => {
    setsuperObj({
        ...superObj,
        [e.target.name]: e.target.value
    })
    console.log('SuperObj ->', superObj);
}

const handleRegistration = async(event) => {

  event.preventDefault();
  const isNameValid = validateName(superObj.name)
  const isphoneNumValid = validatePhone(superObj.contact)
const isAddressValid=validateAddress(superObj.address)
  const isRoleValid = validateRole(superObj.role)
  const isUserNameValid = validateUserName(superObj.userName)
  const isPassValid = validatePassword(superObj.password)
  const isConfirmValid = validateConfirmPassword(superObj.cpassword, superObj.password)
  if (isConfirmValid === true && isPassValid === true && isUserNameValid === true && isRoleValid === true && isNameValid === true && isphoneNumValid === true ) {
      setsuperArr({
          ...superArr,
          superObj
  })

      let res = await axios.post("http://localhost:8080/reg",superObj);
      console.log(res.data.msg)
      if (res.data.msg =="Succefully registered"){

        setsuperObj({
          name:'',
          contact:'',
          address:'',
          userName:'',
          password:'',
          cpassword:'',
           role:'',
        })
        props.history.push('/login')

      }
    
      alert(res.data.msg)
  } else {
      alert('please enter valid data')
  }
}



    //name validation
    const validateName = (name) => {
      if (name !== '') {
          let lName = (/^[a-zA-Z]+$/);
          if (name.match(lName)) {
              setisNameValid(true)
              setsuperNameError('')
              console.log(superNameError);
              return true
          } else {
              setisNameValid(false)
              setsuperNameError('*Please enter valid name')
              console.log(superNameError);
              return false
          }
      } else {
          setisNameValid(false)
          setsuperNameError('*Please enter your name')
          console.log(superNameError);
          return false
      }
  }



      //phone validation
      const validatePhone = (contact) => {
        const num = /^\d{10}$/;
        if (contact !== '') {
            if (contact.match(num)) {
                setisphoneValid(true)
                setsuperPhoneError('')
                return true
            } else {
                setisphoneValid(false)
                setsuperPhoneError('*Please enter valid phone number')
                console.log(superNameError);
                return false
            }
        } else {
            setisphoneValid(false)
            setsuperPhoneError('*Please enter your phone number')
            return false
        }
    }

 //Role validation
 const validateRole = (role) => {
 
  if (role !== '') {
      setisRoleValid(true)
      setsuperRoleError('')
      return true
  } else {
      setisRoleValid(false)
      setsuperRoleError('*Please enter your role')
      return false
  }
}


//address validation

const validateAddress = (address) => {
 
  if (address !== '') {
      setisAddressValid(true)
      setsuperAddressError('')
      return true
  } else {
    setisAddressValid(false)
    setsuperAddressError('*Please enter your role')
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
          console.log(superNameError);
          return true
      } else {
          setisUserValid(false)
          setsuperUserError('*Please enter valid username')
          console.log(superNameError);
          return false
      }
  } else {
      setisUserValid(false)
      setsuperUserError('*Please enter your user name')
      console.log(superNameError);
      return false
  }
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

const validateConfirmPassword = (confirmPassword, password) => {
  if (confirmPassword) {

      if (confirmPassword === password) {
          setConfirmisIdValid(true)
          setsuperConfirmPasswordError('')
          return true
      } else {
          setConfirmisIdValid(false)
          setsuperConfirmPasswordError('*Invalid')
          return false
      }
  } else {
      setConfirmisIdValid(false)
      setsuperConfirmPasswordError('*ConfirmPassword cannot be empty')
      return false
  }
}





  return (
    <div className='reg1 '>
<form className="container1" >
 <div className="row">
  <div className="form-group col-6 ">
    <label for="exampleInputEmail1">Enter Full Name</label>
    <input type="text" className="form-control" id="exampleInputName" name={'name'} value={superObj.name}  onChange={(e) => { handleChange(e) }} aria-describedby="nameHelp"/>
    {!isNameValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superNameError}</span> : null}
  </div>
  <div className="form-group col-6 ">
    <label for="exampleInputPassword1">Contact Number</label>
      <input type="number" className="form-control" id="exampleInputContactNumber" name={'contact'} value={superObj.contact}  onChange={(e) => { handleChange(e) }}/>
      {!isPhoneValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superPhoneError}</span> : null}
  </div>
  </div>
  <div className="row">
  <div className="form-group col-6">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" className="form-control" id="exampleInputAddress" name={'address'} value={superObj.address}  onChange={(e) => { handleChange(e) }}/>
    {!isAddressValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superAddressError}</span> : null}

  </div>
  <div className="form-group col-6">
    <label for="exampleInputPassword1">UserName</label>
    <input type="text" className="form-control" id="exampleInputUserName" name={'userName'} value={superObj.userName}  onChange={(e) => { handleChange(e) }}/>
    {!isUserValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superUserError}</span> : null}  
  </div>
  </div>
  
  <div className="row"> 
   <div className="form-group col-6">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword" name={'password'} value={superObj.password}  onChange={(e) => { handleChange(e) }}/>
    {!isPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superPasswordError}</span> : null}

  </div>

  <div className="form-group col-6">
    <label for="exampleInputPassword1">Confirme Password</label>
    <input type="text" className="form-control" id="exampleInputCpassword" name={'cpassword'} value={superObj.cpassword}  onChange={(e) => { handleChange(e) }}/>
    {!isConfirmPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superConfirmPasswordError}</span> : null}
  </div>
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Role</label>
    <input type="text" className="form-control" id="exampleInputRole" name={'role'} value={superObj.role}  onChange={(e) => { handleChange(e) }} placeholder="ROLE_owner OR ROLE_admin"/>
    {!isRoleValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superRoleError}</span> : null}
  </div>
  <button  class="btn "   onClick={handleRegistration} >Registration</button>

  <hr/>
              <button
             className='btn'
               variant="light"
               onClick={() => {
                 props.history.push("/login");
               }}
             >
               If already Registered Please goto login
             </button>
</form>



    </div>
  )
}

export default withRouter(Reg)