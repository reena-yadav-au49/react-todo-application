import React, { useState } from 'react'

 export const AddTask = ({addTask}) => {
  const [name,setName]=useState("");
  const [date,setDate]=useState("");
  const [reminder,setReminder]=useState(false);
    
    const onSubmit =(e)=>{
      e.preventDefault() ;

      addTask({name,date,reminder});

      setName("");
      setDate("");
      setReminder(false);
        
        alert('task is added');
      };
        
  return (

  <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
      <label>Enter task name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
      </div>

      <div className='form-control'>
      <label>Enter date</label>
      <input type="text" value={date} onChange={(e)=>setDate(e.target.value)} required />
      </div>

      <div className='form-control form-control-check'>
      <label>Reminder  </label>
      <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} required/>
      </div>

      <input  className="btn btn-block" type="submit" style={{background:"green"}}/>
  </form>
  
  )
}

    
