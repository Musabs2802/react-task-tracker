import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [getTask, setTask] = useState('')
  const [getDate, setDate] = useState('')
  const [getReminder, setReminder] = useState(false)

  const submitEvent = (e) => {
    e.preventDefault()

    onAdd({ text: getTask, day: getDate, reminder: getReminder })

    setTask('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={submitEvent}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add task'
          value={getTask}
          required={true}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='datetime-local'
          placeholder='Add task'
          value={getDate}
          required={true}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className='form-control  form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={getReminder}
          value={getReminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>

      <input type='submit' value='Add' className='btn btn-block' />
    </form>
  )
}

export default AddTask
