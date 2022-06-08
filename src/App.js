import { useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'
import tasks from './data/tasks.json'

function App() {
  const [getTasks, setTasks] = useState(tasks)
  const [getFormVisible, setFormVisible] = useState(false)

  const addEvent = (data) => {
    const id = Math.floor(Math.random() * 10000) + 1
    setTasks([...getTasks, { id, ...data }])
  }

  const deleteEvent = (id) => {
    setTasks(getTasks.filter((t) => t.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      getTasks.map((t) => (t.id == id ? { ...t, reminder: !t.reminder } : t))
    )
  }

  const toggleForm = () => {
    setFormVisible(!getFormVisible)
  }

  return (
    <div className='container'>
      <Header onAddClick={toggleForm} isFormVisible={getFormVisible} />
      {getFormVisible ? <AddTask onAdd={addEvent} /> : <></>}
      <Tasks
        tasks={getTasks}
        onDelete={deleteEvent}
        onToggle={toggleReminder}
      />
    </div>
  )
}

export default App
