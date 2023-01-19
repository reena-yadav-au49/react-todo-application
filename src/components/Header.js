import React from 'react'
import { AddTask } from './AddTask'
import { Button } from './Button'

export const Header = ({addTask, toggleNav,toggleOnClick}) => {
  return (
    <div>
      <header>
        <h1>TO DO APP</h1>
        <Button
        title={toggleNav ? "Hide" : "Show"}
        color={toggleNav ? "red" : "green"}
        onClick={toggleOnClick}
      />
    </header>

    {toggleNav && <AddTask addTask={addTask} />}
    </div>

  )
}


