const Task = ({ task }) => {
  return (
    <div className="bg-gray-200 m-5 py-1 p-2 font-bold rounded-md">
        <h3>{task.text}</h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task