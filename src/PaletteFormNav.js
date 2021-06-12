import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    hide: {
        display: 'none',
    },
    navBtns: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '1rem',
    }
}));

export default function PaletteFormNav(props) {

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUniq', value =>
            props.palettes.every(({ paletteName }) =>
                paletteName.toLowerCase() !== value.toLowerCase()))
    })

    const classes = useStyles();
    // const theme = useTheme();
    const [newPaletteName, setNewPaletteName] = useState('')



    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, props.open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Create a palette</Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <ValidatorForm className={classes.saveForm} onSubmit={() => { props.savePalette(newPaletteName) }}>
                        <TextValidator
                            value={newPaletteName}
                            onChange={e => setNewPaletteName(e.target.value)}
                            validators={['required', 'isPaletteNameUniq']}
                            errorMessages={[
                                'enter palette name',
                                'palette already exist',
                            ]}
                        ></TextValidator>
                        <Button variant='contained' color='secondary' type='submit'>Save palette</Button>
                    </ValidatorForm>
                    <Link to='/'><Button variant='contained' >Go back</Button></Link>
                </div>
            </AppBar>
        </div>
    )
}
