import {useState} from 'react'
import { useForm} from 'react-hook-form';
// const [todos,setTodos] = useState([])
function Tickets(props) {
      const { register , handleSubmit , formState: { errors } } = useForm()
     
      const [todos,setTodos] = useState([])
     
      const onFormSubmit = (todoObj) => {
        console.log(todoObj)
        // setTodos([...todos,todoObj.todo])
        setTodos((prev)=>{
          return [...prev,todoObj]
        })
        props.getTodos(todos)
      }
  return (
    <div className='container'>
        <form className='mx-auto mt-5 p-4 bg-light w-50 fab' onSubmit={handleSubmit(onFormSubmit)}>
        {/* <label for="validationTooltip01" htmlFor='movie' className="form-label w-40px">MOVIE NAME</label>
         <input type="text" className="form-control w-40px" id="validationTooltip01" {...register("movie",{required :true})} />
         {errors.firstname?.type==='required' && <p className='text-danger'>*Task is Required*</p>} */}
         <label htmlFor="moviename" className="form-label">State</label>
  <select className="form-select" id="moviename" {...register("moviename", { required: true })}>
    <option selected disabled>Choose Movie...</option>
    <option>RRR</option>
    <option>BHEEMLA-NAYAK</option>
    <option>ET</option>
    <option>RADHESHYAM</option>
    <option>KASHMIR FILES</option>
    <option>BATMAN</option>
  </select>
  <div className="invalid-tooltip">
    Please select a valid state.
  </div>
         <label for="validationTooltip01" htmlFor='name' className="form-label">YOUR NAME</label>
         <input type="text" className="form-control" id="validationTooltip01" {...register("name",{required :true})} />
         {errors.firstname?.type==='required' && <p className='text-danger'>*Task is Required*</p>}
         <div className='mt-2 '>
         <label htmlFor="NoOfTickets" className="form-label">NO. OF TICKETSs</label>
  <select className="form-select" id="NoOfTickets" {...register("NoOfTickets",{required:true})}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
  </select>
  <div className="invalid-tooltip">
    Please select no of seats.
  </div>
         </div>
         <label for="validationTooltip01" htmlFor='number' className="form-label">YOUR MOBILE NUMBER</label>
         <input type="text" className="form-control mb-2" id="validationTooltip01" {...register("number",{required :true})} />
         {errors.firstname?.type==='required' && <p className='text-danger'>*Task is Required*</p>}
         <button className='btn btn-danger mt-2 mb-2 w-50' type='submit'>BOOK TICKETS</button>
         <p className='text-warning'>*Click two times for booking*</p>
        </form>
        <mt-4>
          {/* <p className='display-5 mt-3'>YOUR TICKET CODE</p>
          <div>
            {
              todos.map((todo,index) =><h3 className='text-info' key={index}>{todo.moviename}{todo.name}{todo.number}</h3>)
            }
         </div> */}
         {/* <p className='text-danger'>*Show this code before you enter into your screen/movie*</p> */}
        </mt-4>
    </div>
  )
}

export default Tickets
