import React from "react";
import Task from "./Task";


export const Body = ({tasks ,deleteTask}) => {
  return (
    <div>
    {
      tasks.map((task_element) => (
      <Task
       key={task_element.id}
      task_element={task_element} 
       deleteTask={deleteTask}/>
    ))
  }
  </div>

  );
};
