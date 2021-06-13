import React, { useState, useEffect } from 'react'
import { Button } from "@material-ui/core";
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { makeStyles } from '@material-ui/core/styles';


const maxColor = 20;

const useStyles = makeStyles((theme) => ({
    colorInput: {
        width: '100%',
        marginTop: '1rem',
        height: '70px',
    },
}))

export default function ColorPickerForm(props) {

    const [currentColor, setCurrentColor] = useState('teal')
    const [newColorName, setNewColorName] = useState('')
    const classes = useStyles();

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUniq', value =>
            props.colors.every(({ name }) =>
                name.toLowerCase() !== value.toLowerCase()))

        ValidatorForm.addValidationRule('isColorUniq', value =>
            props.colors.every(({ color }) =>
                color !== currentColor))
    })

    const handleSubmit = () => {
        const newColor = { color: currentColor, name: newColorName }
        props.saveColor(newColor)
        setNewColorName('')
    }

    return (
        <div className={classes.root}>
            <ChromePicker
                color={currentColor}
                onChangeComplete={newColor => {
                    setCurrentColor(newColor.hex)
                }}
            />
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator
                    value={newColorName}
                    onChange={(e) => setNewColorName(`${e.target.value}`)}
                    validators={['required', 'isColorNameUniq', 'isColorUniq']}
                    errorMessages={[
                        'Enter a color name',
                        'color name must be uniq',
                        'color already used'
                    ]}
                    variant="filled"
                    label="color name"
                    disabled={props.colors.length >= maxColor}
                    className={classes.colorInput}
                ></TextValidator>
                <Button
                    color='primary'
                    variant='contained'
                    style={{
                        backgroundColor: currentColor,
                        padding: '.8rem 2.2rem',
                        fontSize: '1.2rem'
                    }}
                    type='submit'
                    disabled={props.colors.length >= maxColor}
                >{props.colors.length >= maxColor ? 'Palette full' : 'Add color'}</Button>
            </ValidatorForm>
        </div >
    )
}
