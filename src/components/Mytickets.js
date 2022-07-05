import React from 'react'

function Mytickets({todos}) {
  console.log(todos)
  return (
    <div>
        <p className='mx-auto card text-center text-warning bg-danger p-2 shadow mb-3'>MY TICKET CODE</p>
        
        <div className='bg-dark container-fluid card mx-auto'>
        {
            todos.map((task, index)=><h3 className='text-info tat p-3' key={index}>{task.moviename}
            {task.name}
            {task.number}
            {/* <p className='text-danger display-12'>*Show this code before you enter into your screen/movie*</p> */}
            </h3>)
 
        }
        <p className='text-danger tat'>*Show this code before you enter into your screen/movie*</p>
        </div>
    </div>
  )
}

export default Mytickets