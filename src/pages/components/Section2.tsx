import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import homeInsurance from '../images/home-insurance.svg';
import carInsurance from '../images/car-insurance.svg';
import lifeInsurance from '../images/life-insurance.svg';
import businessInsurance from '../images/business-insurance.svg';
import travelInsurance from '../images/travel-insurance.svg';
import otherInsurance from '../images/other-insurance.svg';
import { Container, Grid, Paper, Theme, Typography } from '@mui/material';

const useStyles = makeStyles((theme: Theme)=>createStyles({
    section2:{
        // display: 'flex',
        paddingTop: 10,
        // position: 'relative',
        backgroundColor: '#f0f2f5'
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
        marginRight: 32
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
    offers:{
        marginTop: 125
    },
    offerItem:{
        padding: 32
    }
        
}))
export const Section2 = () => {
    const classes= useStyles();
    return (
        <div className={classes.section2}>
            <div className={classes.attentionLine}>
                    <Container className={classes.container}>
                        <Typography variant="h3" className={classes.bottomLine}>
                        Choose your Insurance
                        </Typography>
                        <Typography variant="h6" className={classes.subLine}>
                        Keep Your Life Smile, Safe, and Wealthy
                        </Typography>
                    <div className={classes.offers}>
                        <Grid container spacing={4}>
                            <Grid item md={4}>
                                <Paper className={classes.offerItem}>
                                    <span className={classes.cercle} style={{backgroundColor: '#b0f4ff'}}>
                                        <img src={homeInsurance} alt="Ok" width={50} className={classes.icon} />
                                    </span>

                                    <p>
                                        <span className={classes.headLine}>Home Insurance</span>
                                        <span className={classes.subLine} >
                                            Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.
                                        </span>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper className={classes.offerItem}>
                                    <span className={classes.cercle} style={{backgroundColor: '#fbd1ff'}}>
                                        <img src={carInsurance} alt="Ok" width={50} className={classes.icon} />
                                    </span>

                                    <p>
                                        <span className={classes.headLine}>Car Insurance</span>
                                        <span className={classes.subLine} >
                                            Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.
                                        </span>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper className={classes.offerItem}>
                                    <span className={classes.cercle}>
                                        <img src={lifeInsurance} alt="Ok" width={50} className={classes.icon} />
                                    </span>

                                    <p>
                                        <span className={classes.headLine}>Life Insurance</span>
                                        <span className={classes.subLine} >
                                            Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.
                                        </span>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper className={classes.offerItem}>
                                    <span className={classes.cercle} style={{backgroundColor: '#fef4b4'}}>
                                        <img src={businessInsurance} alt="Ok" width={50} className={classes.icon} />
                                    </span>

                                    <p>
                                        <span className={classes.headLine}>Business Insurance</span>
                                        <span className={classes.subLine} >
                                            Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.
                                        </span>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper className={classes.offerItem}>
                                    <span className={classes.cercle} style={{backgroundColor: '#fddad1'}}>
                                        <img src={travelInsurance} alt="Ok" width={50} className={classes.icon} />
                                    </span>

                                    <p>
                                        <span className={classes.headLine}>Travel Insurance</span>
                                        <span className={classes.subLine} >
                                            Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.
                                        </span>
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper className={classes.offerItem}>
                                    <span className={classes.cercle} style={{backgroundColor: '#d3d3ff'}}>
                                        <img src={otherInsurance} alt="Ok" width={50} className={classes.icon} />
                                    </span>

                                    <p>
                                        <span className={classes.headLine}>Other Insurance</span>
                                        <span className={classes.subLine} >
                                            Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.
                                        </span>
                                    </p>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </div>
    )
}
