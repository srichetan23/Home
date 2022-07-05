import React from 'react'
import RRR from '../images/RRR-5.jpg'
import radheshyam from '../images/raadheshyam.jpg'
import bheemlanayak from '../images/BheemlaNayak.jpg'
import et from '../images/ET.jpg'
import jk from '../images/jk.jpg'
import gbai from '../images/gbai.jpg'
import jhnud from '../images/jhnud.jpg'
import tillu from '../images/tillu.jpg'
import batman from '../images/batman.jpg'
import spidy from '../images/spidy.jpg'
import charted from '../images/charted.jpg'
import show from '../images/show.png'
import cine from '../images/cine.avif'
import cinem from '../images/cinem.avif'
import off from '../images/off.avif'
import { Route,Routes ,Link} from 'react-router-dom'
import Tickets from './Tickets'
function Movies() {
  return (
      <div className='container'>
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
    <div className='row bg-dark mt-4'>
     <div className='bg-danger p-2'>TELUGU MOVIES -TOLLYWOOD</div>
    <div className='col-sm-3 '>
      <div className='card p-2 mt-2 hpo'>
        <img className='' src={RRR} />
        {/* <div className='bg-danger'> */}
        <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
        {/* </div> */}
      </div>
    </div>
    <div className='col-sm-3 '>
      <div className='card p-2 mt-2 hpo'>
        <img src={radheshyam} />
        <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
      </div>
    </div>
    <div className='col-sm-3'>
      <div className='card p-2 mt-2 hpo'>
        <img src={bheemlanayak} />
        <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
      </div>
    </div>
    <div className='col-sm-3 '>
      <div className='card p-2 mt-2 hpo'>
        <img src={et} />
        <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
      </div>
    </div>
    <div className='bg-warning mt-3 p-2'>HINDI MOVIES-BOLLYWOOD</div>
    <div className='row mt-4'>
        <div className='col-sm-3'>
         <div className='card p-2 hpo'>  
          <img src={jk} />
          <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
          </div>
         </div> 
          <div className='col-sm-3'>
          <div className='card p-2 hpo'>  
          <img src={gbai} />
          <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
          </div>
          </div>
          <div className='col-sm-3'>
          <div className='card p-2 hpo'>  
          <img src={jhnud} />
          <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
          </div>
          </div>
          <div className='col-sm-3'>
          <div className='card p-2 hpo'>  
          <img src={tillu} />
          <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
          </div>
          </div>
          <div className='bg-info mt-4 p-2'>ENGLISH MOVIES-HOLLYWOOD</div>
          <div className='row mt-4'>
           <div className='col-sm-4'>
             <div className='card p-2 hpo'>
               <img src={batman} />
               <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
             </div>
           </div>
          
           <div className='col-sm-4'>
             <div className='card p-2 hpo'>
               <img src={spidy} />
               <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
             </div>
           </div>
           <div className='col-sm-4'>
             <div className='card p-2 hpo'>
               <img src={charted} />
               <Link className='btn btn-danger' to='/tickets'>BOOK TICKETS</Link>
             </div>
           </div>

          </div>
        
        </div>
  </div>
      <Routes>
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
      {/* <Routes>
        <Route path='tickets' element={<Tickets />} />
      </Routes> */}
  </div>
  )
}

export default Movies