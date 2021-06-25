import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { Container, TextField, Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import Cookies from 'js-cookie'

function innlogging() {
    const [error, setError] = useState()
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

    const router = useRouter()
    const {
        handleSubmit,
        register
    } = useForm()

    //Enter for å logge inn
    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            onSubmit(formData);
            event.preventDefault();
            // callMyFunction();
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);
    
    //Fetch Bruker
    const onSubmit = async (formData) => {

        const res = await fetch(`./api/getUsers`)
        const datas = await res.json()
        const data = datas.data

        console.log('Test 1', formData)
        const password = formData.password
        const user = formData.user
        if (password && user != undefined ) {
            if (data[user] != undefined) {
                if (password == data[user].Passord) {
                    if (data[user].Admin == true) {
                        Cookies.set('username', `${data[user].Navn} ${data[user].Etternavn}`)
                        Cookies.set('Usernamee', `${user}`)
                        Cookies.set('admin', `${data[user].Admin}`)
                        router.push('/admin')
                    }
                    else if (data[user].Admin == false) {
                        Cookies.set('username', `${data[user].Navn} ${data[user].Etternavn}`)
                        Cookies.set('Usernamee', `${user}`)
                        Cookies.set('admin', `${data[user].Admin}`)
                        router.push('/BrukerHub')
                    }
                    else {
                        console.log('Somthing went wrong')
                    }
                } else {
                    console.log('The password you wrote is wrong try again')
                    //ErrorMessage = 'The password you wrote is wrong, try again'
                    setError('The password you wrote is wrong, try again')
                    setOpen(true);
                }
            }
            else {
                console.log('User does not exist')
                setError('User does not exist')
                //ErrorMessage = 'The password you wrote is wrong try again'
                setOpen(true);
            }
        } else {
            setError('Write password and user')
            setOpen(true);
        }
        

        

        

        console.log('Test 2', data)
        //const data = data.data
        console.log('Test 3', data[user])
        
    }

    return (
        <>
        <Container>
            <div className='container'>
                <div className='item'>
                    <h1>Innlogging</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <br />
                        <TextField {...register('user')} id="standard-basic" label="Brukernavn" />
                        <br />

                        <br />
                        <TextField {...register('password')} id="standard-basic" type="password" label="Passord" />
                        <br />

                        <Button style={{marginTop:'25px'}} variant="outlined" color="primary" type='submit' value='submit'>submit</Button>
                    </form>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
            <Footer />
        </Container>
        </>
    )
}

export default innlogging