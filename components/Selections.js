import Selection from '../components/Selection'
import { Grid } from '@material-ui/core'
import { PropTypes } from '@material-ui/core'

const Selections = ({ users, useRout }) => {
    console.log(users)

    return (
        <>
         {users.map((user) => (
            <Grid item xs={12}>
                <Selection key={user.id} 
                user={user}
                useRout={useRout} 
                // onDelete={onDelete} 
                />
            </Grid>
            ))}
        </>
    )
}

export default Selections
