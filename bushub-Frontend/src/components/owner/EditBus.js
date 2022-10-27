import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";


function EditBus(props) {


  const toggle = props.showedit
  const settoggle = props.setshowedit
  const data = props.selected

  
  const [busdata, setbusdata] = useState({
    busName: "",
    busFeature: "",
    busFacility: "",
    fromPlace: "",
    toPlace: "",
    charges: "",
    distance: "",
    driverName:"",
    contactNo:"",
    userName: "",

  });


  const handleOpen = () => {
    settoggle(true)
  }


  const handleClose = () => {
    settoggle(false)
  }

  useEffect(() => {
     console.log(data)
    setbusdata({...data});
   

  }, [data])
  console.log(busdata.busName)

  let update = (e) => {
    setbusdata({
      ...busdata,
      [e.target.name]: e.target.value
    })
  }

  console.log("xxxxxxxxxxxxxxxxxxxxx", busdata)
  let saveData = async () => {
    try {

      let token = localStorage.getItem("jwt")
      let token1 = JSON.parse(token);
      let jwtToken = `Bearer ${token1}`


      let res = await axios.put(`http://localhost:8080/editbus/${busdata.busId}`, busdata, { headers: { 'Authorization': jwtToken } });
      if (res.data.error) {
        alert('something went wrong')
      } else {
        alert('updated successfully')

        props.setshowedit(false)
        setbusdata({
          busName: "",
          busFeature: "",
          busFacility: "",
          fromPlace: "",
          toPlace: "",
          charges: "",
          distance: "",
          driverName:"",
          contactNo:"",
          userName: "",

        })
      }
    } catch (err) {
      console.log(err)

    };


  }


  return (
    <div>
      <Modal
        show={toggle}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header >
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                 {/* <Form.Label>Email address</Form.Label>  */}
                <Form.Control
                  placeholder="busName"
                  name="busName"
                  value={busdata.busName}
                  onChange={update}
                />
              </Col> 
              <Col>
                <Form.Control
                  placeholder="fromPlace"
                  name="fromPlace"
                  value={busdata.fromPlace}
                  onChange={update}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  placeholder=" toPlace"
                  name="toPlace"
                  value={busdata.toPlace}
                  onChange={update}
                />
              </Col>


              <Col>
                <Form.Control
                  placeholder="distance"
                  name="distance"
                  value={busdata.distance}
                  onChange={update}
                />
              </Col>

            </Row>

            <br />
            <Row>
              <Col>
                <select name="busFacility" value={busdata.busFacility} onChange={update}>
                  <option value="#" hidden>Select Bus Facility</option>
                  <option value="AC">AC</option>
                  <option value="NON-AC">NON-AC</option>
                </select>

              </Col>

              <Col>

                <select name='busFeature' value={busdata.busFeature} onChange={update}>
                  <option value="#" hidden>Select Bus Feature</option>
                  <option value="Sleeper Coach">Sleeper Coach</option>
                  <option value="Sitting">Sitting</option>
                </select>
              </Col>
            </Row>
            <br />

            <Row>
              <Col>
                <Form.Control
                  placeholder="Driver Name"
                  name="driverName"
                  value={busdata.driverName}
                  onChange={update}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder=" Driver contact Number"
                  name="contactNo"
                  value={busdata.contactNo}
                  onChange={update}
                />

              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Form.Control
                  placeholder="userName"
                  name="userName"
                  value={busdata.userName}
                //  onChange={update}
                />
              </Col>


            </Row>
            <br />


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { saveData() }}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditBus