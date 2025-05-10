const todoKey = "rowData";

export const getLocalStorageTodoData = () =>{
  const rowData = localStorage.getItem(todoKey);
  if(!rowData) return [];
  return JSON.parse(rowData);
}

export const setLocalStorageTodoData = (task) =>{
  return localStorage.setItem(todoKey,JSON.stringify(task));
}