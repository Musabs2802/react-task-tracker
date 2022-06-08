import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import tasks from './data/tasks.json'

function App() {
  const [getTasks, setTasks] = useState(tasks)

  const deleteEvent = (id) => {
    setTasks(getTasks.filter(t => t.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={getTasks} onDelete={deleteEvent} />
    </div>
  )
}

export default App
