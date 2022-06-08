import { useState } from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.length > 0
        ? tasks.map((t) => <Task key={t.id} task={t} onDelete={onDelete} />)
        : 'No tasks to show'}
    </>
  )
}

export default Tasks
