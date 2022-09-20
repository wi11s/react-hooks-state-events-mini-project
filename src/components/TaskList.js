import React from "react";
import Task from './Task'
import {useState} from 'react'
import CategoryFilter from "./CategoryFilter";

function TaskList({tasks}) {
  // console.log(tasks)

  const [idToRemove, deleteItem] = useState(-1)

  function handleDelete(e) {
    deleteItem(e.target.key)
  }

  // console.log(tasks, idToRemove, typeof tasks)

  const index = idToRemove;
  if (index > -1) { // only splice array when item is found
    tasks.splice(index, 1); // 2nd parameter means remove one item only
  }

  // array = [2, 9]
  // console.log(tasks); 

  return (
    <div className="tasks">
      {tasks.map(task => {
        // console.log(task)
        return (<Task handleDelete={handleDelete} updateFunction={deleteItem} idToRemove={idToRemove} key={tasks.indexOf(task)} label={tasks.indexOf(task)} text={task.text} category={task.category}/>)
      })}
    </div>
  );
}

export default TaskList;
