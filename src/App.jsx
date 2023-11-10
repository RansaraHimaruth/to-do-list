import { useState } from 'react';


import './index.css';



function App() {
  const [task, setTask] = useState([]);
  const [tasks, newTasks] = useState('');
  const [checkedStatus, setCheckedStatus] = useState([]);
  
  

  const addTask = () => {
    if (tasks) {
      setTask([...task,tasks]);
      setCheckedStatus([...checkedStatus, false]);
      newTasks('')
    }
  }

  const complete = index => {
    const updateArray = task.filter((_,i) => i !== index);
    const updatedCheckedStatus = checkedStatus.filter((_, i) => i !== index);
    setTask(updateArray);
    setCheckedStatus(updatedCheckedStatus);
  }

  return (
    <>
      <div className=' flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden font-mono'>
        <div className='flex flex-col items-center bg-white bg-opacity-50 p-10 pb-10 rounded-lg shadow-md'>
          <h1 className='text-center'>To Do List</h1>
          <input 
          type="text"
          placeholder='Enter task'
          value={tasks}
          onChange={(e) => newTasks(e.target.value)}
          className='w-80 p-4  mb-8'
          />
          <button onClick={addTask} className='btn it  mb-2  p-2 w-20 cursor-pointer hover:transition-all duration-300 ease-linear hover:bg-orange-600 hover:text-white hover:shadow-md rounded-xl'>ADD</button><br />
          {task.map((item,index) => (
          <p id='id' key={index}>
            <input 
            type="checkbox"
            checked={checkedStatus[index]}
            onChange={() => complete(index)} />  
            {item}
          </p>
          ))}
        </div>
      </div>  
    </>
  )
}

export default App
