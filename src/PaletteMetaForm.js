import React, { useState } from 'react';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'
import useStyles from "./styles/PaletteMetaFormStyles";

export default function FormDialog(props) {

    const [stage, setStage] = useState('form');
    const [newPaletteName, setNewPaletteName] = useState('')
    const classes = useStyles();

    const changeStage = () => {
        setStage('emoji')
    }

    const addEmoji = (newEmoji) => {
        props.savePalette(newPaletteName, newEmoji)
    }

    return (
        <div>
            <Dialog
                open={stage === 'emoji'}
                onClose={props.hideForm}>
                <Picker
                    title='Pick your emoji…'
                    onSelect={addEmoji}
                    set='apple'
                />
            </Dialog>
            <Dialog open={stage === 'form'} onClose={props.hideForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">choose a palette name</DialogTitle>
                <ValidatorForm
                    className={classes.saveForm}
                    onSubmit={changeStage}
                    instantValidate={false}
                >
                    <DialogContent>
                        <DialogContentText>
                            please enter a name for new beutiful palette. make sure its uniq!
                        </DialogContentText>
                        <TextValidator
                            className={classes.paletteNameInput}
                            fullWidth
                            value={newPaletteName}
                            onChange={e => setNewPaletteName(e.target.value)}
                            validators={['required', 'isPaletteNameUniq']}
                            errorMessages={[
                                'enter palette name',
                                'palette already exist',
                            ]}
                            margin='normal'
                            label='palette name'
                        ></TextValidator>
                        <DialogActions className={classes.btns}>
                            <Button onClick={props.hideForm} color="primary">
                                Cancel
                            </Button>
                            <Button variant='contained' color='secondary' type='submit'>Save palette</Button>
                        </DialogActions>
                    </DialogContent>
                </ValidatorForm>
            </Dialog>
        </div >
    );
}