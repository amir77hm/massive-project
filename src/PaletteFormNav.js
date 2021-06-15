import React, { useState, useEffect } from 'react'
import PaletteMetaForm from "./PaletteMetaForm";
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ValidatorForm } from "react-material-ui-form-validator";
import useStyles from "./styles/PaletteFormNavStyles";
import QueueIcon from '@material-ui/icons/Queue';
import { withRouter } from "react-router-dom";

function PaletteFormNav(props) {

    const classes = useStyles();
    const [showForm, setShowForm] = useState(false)

    const handleSave = () => { setShowForm(true) }

    const hideForm = () => { setShowForm(false) }

    const savePalette = (newPalette, newEmoji) => {
        props.savePalette(newPalette, newEmoji)
        setShowForm(false)
    }

    const goBack = () => {
        props.handleGoBackBtn()
        props.history.push('/')
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUniq', value =>
            props.palettes.every(({ paletteName }) =>
                paletteName.toLowerCase() !== value.toLowerCase()))
    })

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
                        <QueueIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Create a palette</Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Button onClick={goBack} variant='contained' >Go back</Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleSave}
                        className={classes.backBtn}
                    >
                        Save
                    </Button>
                </div>
            </AppBar>
            {showForm && <PaletteMetaForm savePalette={savePalette} hideForm={hideForm} />}
        </div>
    )
}

export default withRouter(PaletteFormNav)