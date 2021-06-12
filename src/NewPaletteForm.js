import React, { useState, useEffect } from 'react'

import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import { arrayMove } from "react-sortable-hoc";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from "@material-ui/core";
import DraggableColorList from "./DraggableColorList";

const drawerWidth = 300;
const maxColor = 20;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
        textAlign: 'center',
        '& Button': {
            margin: '1.5rem 0.5rem'
        }
    },
}));

export default function NewPaletteForm(props) {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [colors, setColors] = useState(props.palettes[3].colors)


    const addNewColor = (newColor) => {
        console.log(newColor)
        setColors([...colors, newColor])
    }

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const removeColor = (colorName) => {
        const newColors = colors.filter(color => color.name !== colorName.name)
        setColors(newColors)
    }

    const savePalette = (newPaletteName) => {
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(/ /g, '-'),
            colors,
        }
        props.savePalette(newPalette)
        props.history.push('/')
    }

    const onSortEnd = async ({ oldIndex, newIndex }) => {
        const sortedColors = await arrayMove(colors, oldIndex, newIndex)
        setColors(sortedColors)
    }

    const deletePalette = () => {
        setColors([])
    }

    const addRandomColor = () => {
        const allColor = props.palettes.map(p => p.colors).flat()
        const randNum = Math.floor(Math.random() * allColor.length)
        const randomColor = allColor[randNum]
        setColors([...colors, randomColor])
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };


    return (
        <div className={classes.root}>
            <PaletteFormNav
                savePalette={savePalette}
                palettes={props.palettes}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />
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
                        <Button color='primary' variant='contained' onClick={deletePalette}>Clear palette</Button>
                        <Button color='secondary' variant='contained' onClick={addRandomColor} disabled={colors.length >= maxColor}>Random color</Button>
                    </div>
                    <ColorPickerForm
                        palettes={props.palettes}
                        colors={colors}
                        saveColor={addNewColor} />
                </div>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <DraggableColorList
                    colors={colors}
                    removeColor={removeColor}
                    axis='xy'
                    onSortEnd={onSortEnd}
                />
            </main>
        </div>
    );
}
