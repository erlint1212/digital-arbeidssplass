import Footer from '../components/Footer';
import Header from '../components/Header';
import Selections from '../components/Selections';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import useSWR, { mutate } from 'swr';
import { Grid, createMuiTheme } from '@material-ui/core';

function admin() {
  const router = useRouter()

  const { data: users } = useSWR('/api/getDocs', (url) =>
      fetch(url).then((res) => res.json())
  )
  
  if (users != undefined)
  {users.map((test) => {
    console.log('test 1',test)
    return test
  })}

  const theme = createMuiTheme({
    spacing: 8,
  });

  const useRout = (id) => {
    router.push(`Dokument/${id}`)
  }
  
  

  return (
      <div>
        <Container>
          <Header />
          <h1>User Data</h1>
          {users && users.length > 0 ? (
            <Grid container spacing={3}> 
              <Selections 
                users={users}
                useRout={useRout}
                // onDelete={deleteTask} 
                // onToggle={toggleReminder}
              />
            </Grid>
          ) : (
            'No Documents To Show'
          )}
          <Footer />
        </Container>
      </div>
  )
}

export default admin