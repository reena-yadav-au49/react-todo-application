import React from "react";

import {FaTimes} from "react-icons/fa"


const Task = ({ task_element,deleteTask }) => {
  return (
    <div className={`task-light ${task_element.reminder ? "reminder" : ""}`}>
      <h3>
        {task_element.name}
       
      <FaTimes style={{color:"red"}} onClick={()=>deleteTask(task_element.id)}/>
      </h3>
      <p>{task_element.date}</p>
      
    </div>
  );
};
export default Task ;