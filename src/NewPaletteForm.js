import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from "@material-ui/core";
import { ChromePicker } from 'react-color';
import DragableColorBox from "./DragableColorBox";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        // height: '90vh'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    createBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '80%',
        '& Button': {
            margin: '1.5rem 0.5rem'
        }
    },
    colorBoxes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        height: '88vh',
        overflow: 'hidden',
    }
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [currentColor, setCurrentColor] = useState('teal')
    const [colors, setColors] = useState([])
    const [newName, setNewName] = useState('')

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const addNewColor = () => {
        const newColor = { color: currentColor, name: newName }
        setColors([...colors, newColor])
        setNewName('')
    }

    const handleNameChange = (e) => {
        setNewName(`${e.target.value}`)

    }
    const handleColorChange = (e) => {
        // setNewColor(`${e.target.value}`)
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUniq', value => colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()))
        ValidatorForm.addValidationRule('isColorUniq', value => colors.every(({ color }) => color !== currentColor))
    })

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Persistent drawer</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.createBox}>
                    <Typography variant='h4'>Design your palette</Typography>
                    <div>
                        <Button color='primary' variant='contained'>Clear palette</Button>
                        <Button color='secondary' variant='contained'>Random color</Button>
                    </div>
                    <ChromePicker color={currentColor} onChangeComplete={newColor => {
                        setCurrentColor(newColor.hex)
                    }} />
                    <ValidatorForm onSubmit={addNewColor}>
                        <TextValidator
                            value={newName}
                            onChange={handleNameChange}
                            validators={['required', 'isColorNameUniq', 'isColorUniq']}
                            errorMessages={[
                                'enter a color name',
                                'color name must be uniq',
                                'color already used'
                            ]}
                        ></TextValidator>
                        <Button
                            color='primary'
                            variant='contained'
                            style={{ backgroundColor: currentColor, padding: '1rem 3rem' }}
                            type='submit'
                        >Add color</Button>
                    </ValidatorForm>
                </div>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                <ul className={classes.colorBoxes}>
                    {colors.map(color =>
                        <DragableColorBox
                            style={{ backgroundColor: color.color }}
                            key={color.color}
                            color={color}
                        >
                        </DragableColorBox>
                    )}
                </ul>
            </main>
        </div>
    );
}