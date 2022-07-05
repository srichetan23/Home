
import './App.css';
import {NavLink,Route,Routes,Link} from 'react-router-dom';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Movies from './components/Movies';
import Mytickets from './components/Mytickets';
import Tickets from './components/Tickets';
import bms from './images/bms.jpg'
import  { useState } from 'react';
import { useForm } from'react-hook-form'
function App() {
  const [todos,setTodos]=useState([])
  const getTodos=(todosRecieved)=>{
    console.log(todosRecieved)
    setTodos(todosRecieved)
  }
  // const [todos,setTodos]=useState([])

  // const onFormSubmit = (todoObj)=>{
  //   setTodos([...todos,todoObj.todo])
  // }
  return (
    <>
    <div className='App'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
  <div className="container-fluid">
  <img className='bms' src={bms} />
    <a className="navbar-brand " href="#">BOOKMYSHOW</a>
    {/* <img className='bms' src={bms} /> */}
  
    <form className="d-flex fafo">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
     < label htmlFor="validationTooltip04" className="form-label">State</label>
  <select className="form-select" id="validationTooltip04" required>
    <option selected disabled value="">Choose your city</option>
    <option>HYDERABAD</option>
    <option>CHENNAI</option>
    <option>BANGLORE</option>
    <option>MUMBAI</option>
    <option>VIZAG</option>
  </select>
  <div className="invalid-tooltip">
    Please select a valid state.
  </div>
    </form>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-tabs bg-warning ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-dark home" to='/'>HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to='/movies'>MOVIES</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to='/tickets'>BOOK-TICKETS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to='/Contactus'>HELP</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to='/Myticket'>MY-TICKETS</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link text-dark" to='movies'>MOVIES</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link text-dark" to='tickets'>TICKETS</NavLink>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tickets' element={<Tickets getTodos={getTodos}/>} />
        <Route path='/Myticket' element={<Mytickets todos={todos} />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
