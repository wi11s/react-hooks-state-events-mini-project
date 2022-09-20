import React from "react";
// import {useState} from "react";


function Task({label, text, category, handleDelete}) {
  
  // console.log(exists)
    return (
      <div className="task">
        <div className="label">{label}</div>
        <div className="text">{text}</div>
        <div className="categories">{category}</div>
        <button className="delete" onClick={handleDelete}>X</button>
      </div>
      )





}

export default Task;
