import React from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({checked,curTask,handleDeleteTodo,handleCheckedTodo}) => {

  return (
    <div>
        <li className='todo-item'>
              <span className={checked ? "checkList":"notCheckList"}>{curTask}</span>
              <button className='check-btn' onClick={()=>handleCheckedTodo(curTask)}><FaCheck /></button>
              <button className='delete-btn' onClick={()=>handleDeleteTodo(curTask)}><MdDeleteForever /></button>
            </li>
    </div>
  )
}

export default TodoList
