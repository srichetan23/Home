import React from 'react'
import { useForm } from 'react-hook-form';

function Contactus() {
  // const { register , handleSubmit , formState: [errors] } = useForm();

//  const onFormSubmit=(userData)=>{
//      console.log(userData)
//  }
return (
 
  <div className='container-fluid '>
    <div className='mx-auto card bg-danger container p-2 shadow'>
       Welcome to bookmyshow feedback page 
  </div>
  <form className=' mx-auto mt-5 bg-light p-5 shadow w-75 mb-5'  >
    <div className='row'>
<div className="col-sm-4  ">
  <label htmlFor="validationTooltip01" className="form-label tata">First name</label>
  <input type="text" className="form-control" id="validationTooltip01"  />
  <div className="invalid-tooltip">
    pls provide first name
  </div>
</div>
<div className="col-sm-4 ">
  <label htmlFor="validationTooltip02" className="form-label tata">Last name</label>
  <input type="text" className="form-control" id="validationTooltip02"  />
  <div className="valid-tooltip">
    Looks good!
  </div>
</div>
<div className="col-sm-4">
  <label htmlFor="validationTooltipUsername" className="form-label tata">Username</label>
  <div className="input-group has-validation">
    <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
    <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
    <div className="invalid-tooltip">
      Please choose a unique and valid username.
    </div>
  </div>
</div>
</div>
<div className='row'>
<div className="col-md-6  mt-3">
  <label htmlFor="validationTooltip03" className="form-label tata">City</label>
  <input type="text" className="form-control" id="validationTooltip03" required />
  <div className="invalid-tooltip">
    Please provide a valid city.
  </div>
</div>
<div className="col-md-5  mt-3">
  <label htmlFor="validationTooltip04" className="form-label tata">State</label>
  <select className="form-select" id="validationTooltip04" required>
    <option>Choose...</option>
    <option>Telangana</option>
    <option>Andhra Pradhesh</option>
    <option>Tamil Nadu</option>
    <option>Karnataka</option>
    <option>Kerala</option>
  </select>
  <div className="invalid-tooltip">
    Please select a valid state.
  </div>
  </div>
</div>
<div className='row-md'>
<div className="col-md-8 mt-2">
  <label htmlFor="validationTooltip05" className="form-label tata">feedback</label>
  <input type="feedback" className="form-control" id="validationTooltip05" required/>
  <div className="invalid-tooltip">
    please provide if you have any feedback 
  </div>
</div>
</div>
<div className="col-8 mt-3">
  <button className="btn btn-primary tata" type="submit">Submit feedback</button>
</div>
</form>
</div>
)
}

export default Contactus