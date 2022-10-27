import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { UserContext } from '../../App';

function AdminTable() {

  const {state,dispatch} = useContext(UserContext);

  dispatch({type:"USER",payload:true})

const [owners, setowners] = useState([])
const [related, setrelated] = useState([])

    useEffect(async() => {
        let token=localStorage.getItem('jwt')
        let token1 = JSON.parse(token);
        let jwtToken = `Bearer ${token1}`
          let res=await axios.get(`http://localhost:8080/owners`,{ headers: { 'Authorization': jwtToken } });
          setowners(res.data)

    }, [])

    console.log("=====>",owners)

    let relatedData=async(username)=>{

        console.log("hooooooo=>",username)
        let token=localStorage.getItem('jwt')
        let token1=JSON.parse(token);
        let jwtToken=`Bearer ${token1}`


        let res=await axios.get(`http://localhost:8080/getallbuses/${username}`,{headers:{'Authorization':jwtToken}})
        setrelated(res.data)

    }
    
    console.log("=====----===90909090==>",related)



    let  deleteData= async(id)=>{
console.log(",,,,,,,,,=>",id)
        let token=localStorage.getItem('jwt')
        let token1=JSON.parse(token)
        let jwtToken=`Bearer ${token1}`


        let res= await axios.delete(`http://localhost:8080/remove/${id}`,{headers:{'Authorization':jwtToken}})
if(res==""){
    alert(res.data.error)
}else{
    alert(res.data)
}
       

    }
    
  return (
    <div>

<table className="table" style={{paddingTop:'20px'}}>
  <thead className="thead-dark">
    <tr>
      <th scope="col">Sl No</th>
      <th scope="col">OwnerId</th>
      <th scope="col">Owner Name</th>
      <th scope="col">Owner Contact</th>
      <th scope="col">Owner Address</th>
      
      <th scope="col">Owner Role</th>
        <th scope="col">Related</th>
    </tr>
  </thead>
  <tbody>
  {console.log("+++++++++++++++++++>",{owners})}
    { owners && owners.map((val,idx) =>{
      console.log("==========>",val);

      if(val.role==='ROLE_owner'){
      return(
       <tr key={idx+1}> 
          <td>{idx+1}</td>
       <td>{val.id}</td>
       <td>{val.name}</td>
       <td>{val.contact}</td>
       <td>{val.address}</td>
       <td>{val.role}</td>
       
       <td>
                  <button
                    style={{
                      margin: "2px",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                    }}
                    variant="success"
                    onClick={()=>{relatedData(val.userName)}}
                    >
                        {console.log("hiiiiiiiiii===>",val.userName)}
                    PRESS HERE
                  </button>
                  {console.log(val.id)}
                  <button
                    variant="primary"
                    onClick={() => {
                      deleteData(val.id);
                    }}
                  >
                    Delete
                  </button>
                </td>


       </tr>
      )
                }

     })}


  </tbody>
</table>

<div>
{related.map((val) => {
  console.log("===>/",val)
          return (
            <Card 
            //   style={{
            //     width: "20rem",
            //     display: "inline-block",
            //     margin: "20px",
            //     boxShadow:'10px 5px #696969',
              
            //   }
            // }
            
            >
              <Card.Img variant="top" src={val} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Title>{val.busName}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {/* <ListGroupItem>  carName: "",</ListGroupItem> */}
                <ListGroupItem>
                  {" "}
                  busFeature :{val.busFeature}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  busFacility: {val.busFacility}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  fromPlace: {val.fromPlace} 
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  toPlace:{val.toPlace}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  charges: {val.charges}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  distance: {val.distance}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  Driver Name: {val.driverName}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  Driver Contact Number: {val.contactNo}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
              <ListGroupItem>
                  {" "}
                  Owner: {val.userName}
                </ListGroupItem>
              </Card.Body>
            </Card>
          );
        })}
      </div>


    </div>
  )
}

export default AdminTable