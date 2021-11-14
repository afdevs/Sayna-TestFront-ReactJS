import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'
import { Container, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import clsx from  'clsx'
import Typography from '@mui/material/Typography'
import banner from '../../images/banner-1.png'

const useStyles = makeStyles((theme: Theme)=>createStyles({
    linkCompanyName:{
        fontSize: '2em',
        textDecoration: 'none', 
        fontWeight: 'bold',
        color: '#fa586c',
        marginRight: 32

    },
    linkItem:{
        color: '#949ca5',
        fontSize: '1.4em',
        marginRight: 32,
        textDecoration: 'none'
    },

    linkItemActive:{
        color: '#605a60',
    },
    header:{
        zIndex: 1,
        position: 'relative',
        overflow: 'hidden'
    },
    appBar:{
        zIndex: '2!important' as any
    },
    toolbar:{
        background: '#fffffe',
        boxShadow:'-2px 6px 1px',
        padding: '16px 0',
        zIndex: 3
    },
    container:{
        maxWidth: 1440
    },
    hero:{
        marginTop: 250
    },
    subLine:{
        color: '#605a60!important' as any,
        fontWeight: 'bold!important' as any
    },
    bottomLine:{
        fontWeight: 'bold!important' as any,
        fontSize: '2.5em!important' as any,
        marginBottom: '10px!important' as any
    },
    bigLine:{
        fontWeight: 'bold!important' as any,
        fontSize: '4em!important' as any
    },
    banner:{
        width: '55%',
        position: 'absolute',
        right: -140,
        top: -245,
        zIndex: 15
    },
    attentionLine:{    
        textAlign: 'center',
        marginTop: 269
    }
}))
export const Header = () => {
    const classes= useStyles();
    return (
        <div className={classes.header}>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
              <Toolbar className={classes.toolbar}>
                  <Container className={classes.container}>
                    <Link to="/" className={classes.linkCompanyName} >FinCorp</Link>
                    <Link to="#" className={clsx(classes.linkItem, classes.linkItemActive)} >For you & Family</Link>
                    <Link to="#" className={classes.linkItem} >For Business</Link>
                  </Container>
              </Toolbar>
            </AppBar>
            <div className={classes.hero}>
                <Container className={classes.container}>
                    <Typography variant="h6" className={classes.subLine}>
                        HELLO, WE ARE FINCORP
                    </Typography>
                    <Typography variant="h3" className={classes.bigLine}>
                        Insurance <br />
                            made easy.
                    </Typography>
                </Container>
                <div>
                    <img src={banner} alt="Banner" className={classes.banner}/>
                </div>
                <div className={classes.attentionLine}>
                    <Container className={classes.container}>
                        <Typography variant="h3" className={classes.bottomLine}>
                        A new take on insurance
                        </Typography>
                        <Typography variant="h6" className={classes.subLine}>
                            Gread for individuals and business
                        </Typography>
                    </Container>
                </div>
            </div>
        </div>
    )
}
