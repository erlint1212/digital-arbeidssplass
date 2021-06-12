import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.ref} 
                task={task.data} 
                onDelete={onDelete}
                onToggle={onToggle} 
                />
            ))}
        </>
    )
}

export default Tasks

// const newdbs = dbs.data.map((db) => {
//     return { ...db.data };
//   });