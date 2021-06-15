import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import useSWR, { mutate } from 'swr'

function Index() {
  const [showAddTask, setShowAddTask] = useState(false)
  //Oppdaterer nettside uten SWR

  //const [tasks, setTasks] = useState([])

  // const getTasks = dbs.data.map((Tasks) => {
  //   return Tasks.id
  // })

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }

  //   getTasks()
  // }, [])
  const { data: tasks } = useSWR('/api/getTasks', (url) =>
    fetch(url).then((res) => res.json())
  )
  console.log('Test 1', tasks)


  //Fetch Tasks
  const fetchTasks = () => {
    // const res = await fetch('./api/getTasks')
    // const data = await res.json()

    const { data } = useSWR('.api/getTasks', (url) =>
    fetch(url).then((res) => res.json())

    )

    // const res = await fetch('http://localhost:5000/tasks')
    // const data = await res.json()

    return data
  } 

  //Fetch Task
  const fetchTask = async (id) => {
    console.log('Test 1',id)
    const res = await fetch(`./api/getTask/${id}`)
    const data = await res.json()

    return data
  }

  //Add Task
  const addTask = async ( task ) => {
    const res = await fetch('./api/addTask', {
      method:'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ data: task }),
    })

    //setTasks([...tasks, task])

    //const id = Math.floor(Math.random() * 1000) + 1
    //const newTask = { id, ...task }
    mutate(`/api/getTasks`)
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`./api/delTask/${id}`,{
      method: 'DELETE',
    })

    mutate(`/api/getTasks`)
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,
    reminder: !taskToToggle.reminder}
    console.log(updTask)

    const res = await fetch('./api/remToggle', {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ data: updTask })
    })

    const data = await res.json()

    // setTasks(tasks.map((task) => 
    // task.id === id ? { ...task, reminder:
    // data.reminder } : task))
    mutate(`/api/getTasks`)
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks && tasks.length > 0 ? (
              <Tasks 
                tasks={tasks} 
                onDelete={deleteTask} 
                onToggle={toggleReminder}
              />
            ) : (
              'No Tasks to Show'
            )}
      <Footer /> 
    </div>
  )
}

export default Index;