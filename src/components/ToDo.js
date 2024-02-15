import React from 'react'
import {RiDeleteBinLine} from "react-icons/ri";

const ToDo = ({text, deleteToDo}) => {
  return (
    <div className="todo-container">
      <div className="todo">
          <div className="text">{text}</div>
          <div className="icons">
             
              <RiDeleteBinLine className='icon' onClick={deleteToDo}/>
          </div>
      </div>
    </div>
  )
}

export default ToDo