import React from 'react'
import { Carousel } from 'react-bootstrap'

import '../components/Home.css'

function Home() {
  return (
    <div>
<Carousel fade>
      <Carousel.Item>
        <img id='bha'
          className="d-block w-100 h-90"
          src="https://wallpapercave.com/wp/wp2655664.jpg"
         
          alt="First slide"
         
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id='bha'
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp3845302.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id='bha'
          className="d-block w-100"
         
          src="http://www.gqindia.com/wp-content/uploads/2015/09/gq-srk-vanity-van-06.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        


    </div>
  )
}

export default Home