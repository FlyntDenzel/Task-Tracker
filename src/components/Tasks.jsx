import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle  }) => {
      return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} className="pl-5" />
        ))}
    </>
  )
}

export default Tasks