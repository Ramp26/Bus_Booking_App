import axios from 'axios'
import React, { useState , useEffect} from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './Se.css'
import { withRouter } from 'react-router-dom'


function Search() {

  const [busData, setbusData] = useState({

    fromPlace: "",
    toPlace: ""

  })

  
  const [searchedData, setsearchedData] = useState([])

  let handleChange = (e) => {
    setbusData({
      ...busData,
      [e.target.name]: e.target.value
    })
  }

  console.log("-=-=-=-=-=-=-=", busData)


  let searchData = async(e) => {
e.preventDefault()


  // axios.post('http://localhost:8080/search' ,{
  //     "fromPlace": 'belawadi',
  //     "toPlace": 'bangalore'}).then((response) => {console.log(response);}, (error) => {console.log(error);});

    let res = await  axios.post("http://localhost:8080/search",busData);
 
    console.log("======>",res.data);
    setsearchedData(res.data)
  }


  console.log("----->",searchedData);
  return (
    <div className='ram'>

      <form class=" rock" >

        <div class="form-group">
          <label for="exampleInputPassword1">From Place</label>
          <input type="text" class="form-control" id="exampleInputPassword1" name='fromPlace' value={busData.fromPlace} onChange={(e) => { handleChange(e) }} />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">To Place</label>
          <input type="text" class="form-control" id="exampleInput" name='toPlace' value={busData.toPlace} onChange={(e) => { handleChange(e) }} />
        </div>


        <button type="submit" class="btn" onClick={searchData}>Search</button>
        <br/>
        <br/>
      </form>

      <div>
{searchedData.map((val) => {
  console.log("===>/",val)
          return (
            <Card 
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
             
              </ListGroup>
              <Card.Body>
                <Card.Link href="/booking"> <h3>Book My Sheat</h3></Card.Link>
                {/* <Card.Link href="">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          );
        })}
      </div>



   
    </div>
  )
}


export default withRouter(Search)