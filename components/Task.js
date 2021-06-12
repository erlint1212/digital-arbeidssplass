import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.data.reminder ?
        'reminder' : ''}`}
         onDoubleClick={() => onToggle(task.data.reminder)}>
            <h3>
                {task.text} <FaTimes 
                style={{ color:'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.ref)}
                /> 
            </h3>
            <p>{task.data.day}</p>
        </div>
    )
}

export default Task
