import { Grid, makeStyles, Container, Paper } from "@material-ui/core"
import React from "react";

const ShowForm = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
      //Bruk xs for mobil

    return (
        <Container>
            <div>
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={12} sm={3}>
                        <Paper>Test</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper>Test</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper>Test</Paper>
                    </Grid>
                    <Grid container xs={12}>
                        <React.Fragment>
                            <Grid item xs={12} sm={3}>
                                <Paper>Test</Paper>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Paper>Test</Paper>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                </Grid>     
        </div>
    </Container>
    )
}

export default ShowForm
