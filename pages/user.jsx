import { useState, useEffect } from 'react'
import useSWR, { mutate } from 'swr'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { Container, Grid, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import Header from '../components/Header'
import Footer from '../components/Footer'
import KjenteAvik from '../components/KjenteAvik'
import Montasje from '../components/Montasje'
import Solskjerming from '../components/Solskjerming'
import FeilSkader from '../components/FeilSkader'
import Avslut from '../components/Avslut'
import SkjemaHeader from '../components/SkjemaHeader'
import { SkjemaFooter } from '../components/SkjemaFooter'
import Cookies from 'js-cookie'

let renderCount = 0;

// const FormValues = {
//   Bruker: 'Erling',
//   SkjemaNr: '15-7',
//   Dato: '17.06.21',
//   Prosjektnummer: '21323',
//   ProsjektNavn: 'Test',
//   KjenteAvik: {
//     N1_0: {
//       Resultat: Boolean,
//       Dato: string,
//       Sign: string,
//       Anmerkning: string
//     },
//     N1_1: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N1_2: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N1_3: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N1_4: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N1_5: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     }
//   },
//   Montasje: {
//     N2_0: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N2_1: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N2_2: {
//       ResultatStørst: 20,
//       ResultatMinst: 10,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N2_3: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N2_4: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N2_5: {
//       Målt: 10,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N2_6: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N2_7: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N2_8: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N2_9: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     }
//   },
//   Solsjerming: {
//     N3_0: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N3_1: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N3_2: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     }
//   },
//   FeilSkader: {
//     N4_0: {
//       Resultat: "",
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     },
//     N4_1: {
//       Resultat: false,
//       Dato: "",
//       Sign: "",
//       Anmerkning: ""
//     }
//   },
//   Avslutningsvis: {
//     N5_0: {
//       UtfTegn: ""
//     }
//   }
// }



function Index() {

  //SnackBar alert for sucess
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  //const [data, setData] = useState([])
  // const {
  //   register,
  //   handleSubmit,
  //   error
  // } = useForm();

  const methods = useForm()
  const user = Cookies.get('username')
  methods.register('Bruker', {value: user});
  //const { reset, watch } = useForm()
  //const { watch } = useForm()

  const onSubmit = async (data) => {
    console.log('Data',data)
    const res = await fetch('./api/addTask', {
      method:'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    setOpen(true);
  }

  // useEffect(() => {
  //   console.log(watch())
  // }, [reset]);
  

  //Add Task
  // const AddTask = ({ onAdd }) => {
  //   const [text, setText] = useState('')
  //   const [day, setDay] = useState('')
  //   const [reminder, setReminder] = useState(false)

  //   const onSubmit = (e) => {
  //       e.preventDefault()

  //       if(!text) {
  //           alert('Please add a task')
  //           return
  //       }

  //       onAdd({ text, day, reminder })

  //       setText('')
  //       setDay('')
  //       setReminder(false)
  //   }

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
      body: JSON.stringify({ body: task }),
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
    <>
      <Container>
        <Header renderCount={renderCount} />
        <FormProvider {...methods} >
          <form className='add-form' onSubmit={methods.handleSubmit(onSubmit)}>
            <table className="nice"> 
              <tbody>
                <SkjemaHeader />
              </tbody>
            </table>
            <table>
              <tbody>
                <KjenteAvik />
                <Montasje />
                <Solskjerming />
                <FeilSkader />
                <Avslut />
              </tbody>
            </table>
            <div style={{marginTop: '50px'}}>
              <table>
                <tbody className="tableBot">
                  <SkjemaFooter />
                </tbody>
              </table>
            </div>
            <input type='submit' value='Lagre og send skjema'
            className='btn btn-block' />
          </form>
        </FormProvider>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Document Sent!
          </Alert>
        </Snackbar>
        <Footer /> 
      </Container>
    </>
  )
}

export default Index;

// {showAddTask && <AddTask onAdd={addTask} />}
//             {tasks && tasks.length > 0 ? (
//               <Tasks 
//                 tasks={tasks} 
//                 onDelete={deleteTask} 
//                 onToggle={toggleReminder}
//               />
//             ) : (
//               'No Tasks to Show'
//             )}