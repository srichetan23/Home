import React from 'react'
import image from '../images/image1.jpg'
import RRR from '../images/RRR-5.jpg'
import radheshyam from '../images/raadheshyam.jpg'
import bheemlanayak from '../images/BheemlaNayak.jpg'
import et from '../images/ET.jpg'
import rrr from '../images/rrrcover.jpg'
import bn from '../images/bnk.jpg'
import prp from '../images/prp.jpg'
import {Route,Routes,Link} from 'react-router-dom'
import Movies from './Movies'
import show from '../images/show.png'
import cine from '../images/cine.avif'
import cinem from '../images/cinem.avif'
import off from '../images/off.avif'
import Tickets from './Tickets'
function Home() {
  return (
    <div className='container'>
    <div id="carouselExampleIndicators" className="carousel slide mt-3" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner mt-2">
      <div className="carousel-item active " data-bs-interval='3000'>
        <img src={rrr} className="d-block w-100 h-75" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval='3000'>
        <img src={bn} className="d-block w-100 h-75" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval='3000'>
        <img src={prp} className="d-block w-100 h-75" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className='mt-4 bg-warning p-2 justify-content-end '>BOOKMYSHOW RECOMMENDED MOVIES</div>
  <div className='bg-dark mt-4 mb-4'>
   
    <div className='row bg-dark p-4'>
      <div className='col-sm-3 '>
        <div className='card p-2 mt-2 hpo'>
          <img className='' src={RRR} />
          <Link className='btn btn-danger' to='tickets'>BOOK TICKETS</Link>
        </div>
      </div>
      <div className='col-sm-3'>
        <div className='card p-2 mt-2 hpo'>
          <img src={radheshyam} />
          <Link className='btn btn-danger' to='tickets'>BOOK TICKETS</Link>
        </div>
      </div>
      <div className='col-sm-3'>
        <div className='card p-2 mt-2 hpo'>
          <img src={bheemlanayak} />
          <Link className='btn btn-danger' to='tickets'>BOOK TICKETS</Link>
        </div>
      </div>
      <div className='col-sm-3 '>
        <div className='card p-2 mt-2  hpo'>
          <img src={et} />
          <Link className='btn btn-danger' to='tickets'>BOOK TICKETS</Link>
        </div>
      </div>
    </div>
  </div>
  {/* <div id="carouselExampleIndicators" className="carousel slide mt-3" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner mt-2">
      <div className="carousel-item active " data-bs-interval='3000'>
        <img src={cine} className="d-block w-100 h-75" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval='3000'>
        <img src={cinem} className="d-block w-100 h-75" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval='3000'>
        <img src={off} className="d-block w-100 h-75" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div> */}
  <div id="carouselExampleIndicators" className="carousel slide mt-3" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner mt-2">
      <div class="carousel-item active " data-bs-interval='3000'>
        <img src={cine} class="d-block w-100 h-75" alt="..."/>
      </div>
      <div class="carousel-item" data-bs-interval='3000'>
        <img src={cinem} class="d-block w-100 h-75" alt="..."/>
      </div>
      <div class="carousel-item" data-bs-interval='3000'>
        <img src={off} class="d-block w-100 h-75" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div className='bg-warning mt-4'>
  <Link className="nav-link justify-content start mt-4 hpo" to='movies'>CLICK HERE FOR MORE MOVIES</Link>
  </div>
  <Routes>
        <Route path='movies' element={<Movies />} />
        <Route path='tickets' element={<Tickets />} />
      </Routes> 
      <div className='card mt-4 bg-danger p-4'>
        <div className='row'>
        <div className='card mx-auto col-sm-8 '>
           <img className='shol' src={show} />
        </div>
        <div className=' card col-sm-4'>
          <h3>BOOK MY SHOW</h3>
          This is the official Website of the worlds most preferable online ticket booking platform- BOOK-MY-SHOW.
           You can get the tickets for movies in your preferable tickets.This is available in major cities of India which include Hyderabad,Chennai,Banglore,Mumbai,Delhi,Kolkata and manymore.
          </div>
       
        </div>
        
      </div> 
      <div className='card bg-danger mt-2 dot p-4'>
         <h3>CONTACT DETAILS :</h3>
         <h5>For any queries contact the below number </h5>
         <h6>040-123456XXX</h6>
         <h3>Branch Details </h3>
         <h5>MYTHRIVANAM</h5>
         <h5>AMEERPET</h5>
         <h5>HYDERABAD</h5>
      </div>
  </div>
 
  )
}

export default Home