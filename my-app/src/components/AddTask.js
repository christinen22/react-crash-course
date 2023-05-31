import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
        alert('Du glömde lägga till en uppgift 🕵️‍♀️')
        return
    }

    onAdd({ text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
}

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Uppgift</label>
                <input type='text' placeholder='Lägg till uppgift'
                value={text} onChange={(e) => setText(e.target.value) } />
            </div>
            <div className='form-control'>
                <label>Dag och tid</label>
                <input type='text' placeholder='Lägg till dag och tid'
                value={day} onChange={(e) => setDay(e.target.value) } />
            </div>
            <div className='form-control'
            form-control-check>
                <label>Sätt påminnelse</label>
                <input type='checkbox'
                checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) } />
            </div>
            <input type='submit' value='Spara uppgift' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
