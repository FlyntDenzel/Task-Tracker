import { useState } from "react"

const AddTask = () => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

  return (
    <form className="m-5 p-3  font-bold">
        <div className="grid pb-5">
            <label >Task</label>
            <input type="text" placeholder="Add Task" className="border border-black p-2 mt-3  w-full"/>
        </div>
        <div className="grid mb-5">
            <label>Day & Time</label>
            <input type="date" className="border border-black mt-3  p-2 "/>
        </div>
        <div className="flex justify-evenly">
            <label>Set Reminder</label>
            <input type="checkbox" className="w-7"/>
        </div>

        <input type="submit" value='Save Task' className="bg-black text-white w-full p-1.5 rounded-md mt-4"/>
    </form>
  )
}

export default AddTask