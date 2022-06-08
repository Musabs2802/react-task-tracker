import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import tasks from './data/tasks.json'

function App() {
  const [getTasks, setTasks] = useState(tasks)

  const deleteEvent = (id) => {
    setTasks(getTasks.filter((t) => t.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      getTasks.map((t) => (t.id == id ? { ...t, reminder: !t.reminder } : t))
    )
  }

  return (
    <div className='container'>
      <Header />
      <Tasks
        tasks={getTasks}
        onDelete={deleteEvent}
        onToggle={toggleReminder}
      />
    </div>
  )
}

export default App
