import { createStyles, makeStyles } from '@mui/styles';
import React from 'react'
import healthFamilyIllustration from '../images/health-family-1.png';
import checkBox from '../images/check-box.svg';
import { Theme, Container, Typography, Divider } from '@mui/material';

const useStyles = makeStyles((theme: Theme)=>createStyles({
    section1:{
        marginTop: '5%',
        display: 'flex',
        paddingTop: 70,
        position: 'relative',
        maxHeight: 787
    },
    banner:{
        width: '100%',
        // position: 'absolute',
        // right: -140,
        // top: -245,
        // zIndex: 15
    },
    textsContent:{
        maxWidth: 700,
        position: 'absolute',
        right: 275,
        top: 0
    },
    text1:{
        color: '#2b7fff',
        fontSize: '2em!important' as any,
        fontWeight: 'bold!important' as any,
        marginBottom: '16px!important' as any
    },
    text2:{
        fontSize: '1.7em!important' as any,
        marginBottom: '16px!important' as any

    },
    text3:{
        marginBottom: '16px!important' as any,
        fontWeight: 'bold!important' as any,
        color: '#949ca5!important' as any,

    },
    cercle:{
        textAlign: 'center',
        height: 75,
        display: 'inline-block',
        background: '#daffd4',
        borderRadius: 45,
        width: 75,
        position: 'relative',
        marginRight: 32
    },
    checkBox:{
        position: 'absolute',
        top: 24,
        right: 23,
        zIndex: 3,
        opacity: 0.5
    },
    servicesList:{
        marginTop: 50,
    },
    headLine:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '0.5em'
    },
    subLine:{
        fontWeight: 'bold!important' as any,
        color: '#949ca5!important' as any,
    },
    listItem:{
        display: 'flex',
        // justifyContent:' space-between',
        width: '93%',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25
    }
}))
export const Section1 = () => {
    const classes= useStyles();
    return (
        <div className={classes.section1}>
            <div>
                <img src={healthFamilyIllustration} alt="Family health" className={classes.banner}/>
            </div>
            <div className={classes.textsContent}>
                    <Typography className={classes.text1}>
                        Monotonectally deploy seamless data and resource maximizing systems. 
                    </Typography>
                    <Typography  className={classes.text2}>
                        Great for individuals and small families up to 4 members.
                    </Typography>
                    <Typography  className={classes.text3}>

                        A strong, up-to-date, employee benefits health insurance program is vital for attracting and retaining good employees. It takes diligence, creativity and   attention to detail to ensure you are getting the best “bang for your buck” each and every year.
                    </Typography>
                    <div className={classes.servicesList}>
                            <div className={classes.listItem}>
                                <span className={classes.cercle}>
                                    <img src={checkBox} alt="Ok" width={25} className={classes.checkBox} />
                                </span>
                                <p>
                                    <span className={classes.headLine}>Comprehensive Insurance</span>
                                    <span className={classes.subLine} >
                                        Dynamically repurpose e-business users rather than granular products.
                                    </span>
                                </p>
                            </div>
                            <Divider/>
                            <div className={classes.listItem}>
                                <span className={classes.cercle}>
                                    <img src={checkBox} alt="Ok" width={25} className={classes.checkBox} />
                                </span>
                                <p>
                                    <span className={classes.headLine}>Support is just a call away</span>
                                    <span className={classes.subLine} >
                                    Rapidiously customize value-added platforms compliant action items.
                                    </span>
                                </p>
                            </div>
                            <Divider/>
                            <div className={classes.listItem}>
                                <span className={classes.cercle}>
                                    <img src={checkBox} alt="Ok" width={25} className={classes.checkBox} />
                                </span>
                                <p>
                                    <span className={classes.headLine}>Say goodbye to paperwork.</span>
                                    <span className={classes.subLine} >
                                    Globally deliver economically sound communities relationships. 
                                    </span>
                                </p>
                            </div>
                    </div>
            </div>
            {/* <div className={classes.attentionLine}>
                <Container>
                    <Typography variant="h3" className={classes.bottomLine}>
                    A new take on insurance
                    </Typography>
                    <Typography variant="h6" className={classes.subLine}>
                        Gread for individuals and business
                    </Typography>
                </Container>
            </div>

            <Container className={classes.container}>
                <Typography variant="h6" className={classes.subLine}>
                    HELLO, WE ARE FINCORP
                </Typography>
                <Typography variant="h3" className={classes.bigLine}>
                    Insurance <br />
                        made easy.
                </Typography>
            </Container> */}
    </div>
    )
}
