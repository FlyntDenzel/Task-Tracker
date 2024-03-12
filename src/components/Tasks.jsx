import Task from "./Task"

const Tasks = ({ tasks }) => {
      return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} className="pl-5" />
        ))}
    </>
  )
}

export default Tasks