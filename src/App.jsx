import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

const App = () => {
  // const name = 'Denzel'

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },

    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 12:30pm',
        reminder: true
    },

    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    },
] )

//function for deleting task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// function to toggle reminder
const toggleReminder = (id) => {
  setTasks( tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task) )
}

  return (
    <div className="flex justify-center">
      <div className="border border-blue-500 rounded-md h-full w-full m-2">
        <Header />
        <AddTask />
        {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks Found'}
      </div>
    </div>
  )
}

export default App