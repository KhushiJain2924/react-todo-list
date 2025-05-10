import React, { useEffect, useState } from 'react'

const TodoDate = () => {
  const [dateTime,setDateTime] = useState("");

  useEffect(()=>{
    const interval = setInterval(()=>{
    const now = new Date();
    const formatDate = now.toLocaleDateString();
    const formatTime = now.toLocaleTimeString();
  
    setDateTime(`${formatDate} - ${formatTime}`);
    },1000);

    return () => clearInterval(interval);

  },[])
  setInterval(()=>{
    const now = new Date();
  const formatDate = now.toLocaleDateString();
  const formatTime = now.toLocaleTimeString();

  setDateTime(`${formatDate} - ${formatTime}`);
  },1000);
  return (
    <div>
       <h2>{dateTime}</h2>
    </div>
  )
}

export default TodoDate
