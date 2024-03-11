import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

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
  return (
    <div className="flex justify-center">
      <div className="border border-blue-500 rounded-md h-[350px] w-4/5 m-2">
        <Header />
        <Tasks tasks={tasks}/>
      </div>
    </div>
  )
}

export default App