import { FaTimes } from 'react-icons/fa'
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const Selection = ({ user, useRout }) => {

    // const userId = user.id
    // document.getElementById(`${userId}`).addEventListener('mouseover', mouseOver)

    // function mouseOver() {
    //     document.getElementById(`${userId}`).style.color = 'red'
    // }

    return (
        <Paper>
            <div className='notValidated'>
                <h3>
                    {user.Bruker}
                </h3>
                <div>
                    <div>
                        <Button 
                            id={user.id} 
                            variant='contained'
                            onClick={() => useRout(user.id)}
                            size='small'
                        >
                            See Document
                            <br />
                        </Button>
                    </div>
                    <div>
                        <p>SkejmaNr: {user.SkjemaNr}</p>
                    </div>
                    <div>
                        <p>Dato: {user.Dato}</p>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default Selection
