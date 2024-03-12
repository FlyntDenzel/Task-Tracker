import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    //ternary operator to change the color of the task after being clicked on it
    <div className={`" bg-gray-100 m-5 py-1 p-2 font-bold rounded-md" ${task.reminder ? "border-l-4 border-l-green-600" : ''}`} onDoubleClick={() => onToggle(task.id)} >
        <h3 className='flex justify-between'>{task.text} <FaTimes onClick={() => onDelete(task.id)} className='m-1 text-red-600 cursor-pointer'/> </h3>
        <p>{task.day} </p>
    </div>
  )
}

export default Task