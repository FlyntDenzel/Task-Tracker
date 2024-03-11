
const Task = ({ tasks }) => {
      return (
    <>
        {tasks.map((task) => (
            <h3 key={task.id} className="pl-5">{task.text}</h3>
        ))}
    </>
  )
}

export default Task