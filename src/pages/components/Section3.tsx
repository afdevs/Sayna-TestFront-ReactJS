import { Theme, Grid, Container } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme: Theme)=>createStyles({
    section3:{
        marginTop: '5%',
        // display: 'flex',
        // position: 'relative',
        marginBottom: '5%',
    },
    container:{
        maxWidth: 1440
    },
    attentionLine:{    
        textAlign: 'center',
        marginTop: 269
    },
    bottomLine:{
        fontWeight: 'bold!important' as any,
        fontSize: '2.5em!important' as any,
        marginBottom: '10px!important' as any
    },
    cercle:{
        textAlign: 'center',
        height: 125,
        display: 'inline-block',
        background: '#daffd4',
        borderRadius: 75,
        width: 125,
        position: 'relative',
        zIndex: 0
    },
    headLine:{
        textTransform: 'capitalize',
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '0.5em',
        fontSize: '1.5em'
    },
    subLine:{
        fontWeight: 'bold!important' as any,
        color: '#949ca5!important' as any,
    },
    icon:{
        position: 'absolute',
        top: 37,
        right: 37,
        zIndex: 3,
        opacity: 0.5
    },
    steps:{
        marginTop: 125
    },
    stepItem:{
        fontSize: '4em',
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        right: 43,
        top: 15,
        opacity: 0.3,
    }
        
}))

export const Section3 = () => {
    const classes= useStyles();
    return (
        <div className={classes.section3}>
        <Container className={classes.container}>
            <div className={classes.steps}>
                <Grid container spacing={4}>
                    <Grid item md={4} textAlign="center">
                        <span className={classes.cercle} style={{backgroundColor: '#b0f4ff'}}>
                            <span className={classes.stepItem} >1</span>
                        </span>

                        <p>
                            <span className={classes.headLine}>Report Claim</span>
                            <span className={classes.subLine} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.
                            </span>
                        </p>
                    </Grid>
                    <Grid item md={4} textAlign="center">
                        <span className={classes.cercle} style={{backgroundColor: '#fbd1ff'}}>
                            <span className={classes.stepItem}>2</span>
                        </span>

                        <p>
                            <span className={classes.headLine}>Claim Processing</span>
                            <span className={classes.subLine} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.
                            </span>
                        </p>
                    </Grid>
                    <Grid item md={4} textAlign="center">
                        <span className={classes.cercle}>
                            <span className={classes.stepItem}>3</span>
                        </span>

                        <p>
                            <span className={classes.headLine}>Final Settlement</span>
                            <span className={classes.subLine} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.
                            </span>
                        </p>
                    </Grid>
                </Grid>
            </div>
            </Container>
        </div>
    )
}
