import React from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
 
   const[toggleNav ,setToggleNav]= useState(false);
  const [tasks,setTask] = useState([
    {
      id:1,
      name:"mr A",
      date :"14 jan",
      reminder: true
    },
    {
      id:2,
      name:"mr B",
      date :"17 jan",
      reminder: false
    },
    {
      id:3,
      name:"mr C",
      date :"18 jan",
      reminder: false
    }
  ]);
 
  const toggleOnClick = () => {
    setToggleNav(!toggleNav);
  };


  const addTask =(task)=>{
    const id = Math.floor(Math.random()*1000);
    const newTask ={id, ...task};

     setTask([...tasks, newTask]);
  };



  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };


 
  return (
    <div className="container">
      <Header addTask={addTask} 
      toggleNav={toggleNav}
      toggleOnClick={toggleOnClick} />
      
      <Body tasks={tasks} deleteTask={deleteTask} />
      <Footer />
    </div>
  );
}

export default App;
