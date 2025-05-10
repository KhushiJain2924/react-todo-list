import { useState } from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import TodoDate from './TodoDate';
import TodoList from './TodoList';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage';


export const Todo = () =>{
  const [task,setTask] = useState(()=>getLocalStorageTodoData())
 

  const handleFormSubmit = (input)=>{
    const {id,content,checked} = input;
    if(!content) return;

    const ifTodoContentMatched = task.find((curTask)=>curTask.content === content);
    if(ifTodoContentMatched) return; 

    setTask((prevTask)=>[...prevTask,{id,content,checked}]); 
  };
  setLocalStorageTodoData(task);

  const handleClearTodoData = ()=>{
    setTask([]);
  }


  const handleDeleteTodo = (value)=>{
    const updatedTask = task.filter((curTask)=>curTask.content !== value);
    setTask(updatedTask);
  }

  const handleCheckedTodo = (content)=>{
    const updatedTask = task.map((curTask)=>{
      if(curTask.content === content){
        return {...curTask,checked: !curTask.checked}; 
      }else{
        return curTask;
      }
    });
    setTask(updatedTask);
  }

  return(
    <>
    <section className='todo-container'>
      <header>
        <h1>Todo List</h1>
       <TodoDate/>
      </header>
     <TodoForm onAddTodo={handleFormSubmit}/>
      <section className='myUnOrdList'> 
        <ul>
          {task.map((curTask)=>{
            return(
          <TodoList 
          curTask={curTask.content} 
          index={curTask.id} 
          checked = {curTask.checked}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckedTodo = {handleCheckedTodo}
          />
          )})}
        </ul>
      </section>
      <section>
        <button className='clear-btn' onClick={handleClearTodoData}>Clear all</button>
      </section>
    </section>
    </>
  )
}