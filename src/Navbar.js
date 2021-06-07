import React, { Component } from 'react'
import Slider from "rc-slider";
import 'rc-slider/assets/index.css'
import './Navbar.scss'
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";



export default class Navbar extends Component {

    state = {
        format: 'hex',
        open: false
    }

    handleChange = (e) => {
        this.setState({ format: e.target.value, open: true }, () => {
            this.props.handleChange(this.state.format)
        })
    }

    closeSnackbar = () => {
        this.setState({ open: false })
    }

    render() {
        const { level, changeLevel, sliderShow } = this.props
        return (
            <div className='Navbar'>
                <div className='Navbar__logo'>
                    <Link to='/'>color picker</Link>
                </div>
                {sliderShow && <div className='Navbar__slider'>
                    <Slider defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                    />
                </div>}
                <div className='Navbar__select'>
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value='hex'>Hex - #ffffff</MenuItem>
                        <MenuItem value='rgb'>Rgb - (255, 255, 255)</MenuItem>
                        <MenuItem value='rgba'>Rgba - (255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.closeSnackbar}
                    message={<span className='message-id'>Format Changed to {this.state.format}</span>}
                    action={
                        <IconButton key='close' aria-label="close" color="inherit" onClick={this.closeSnackbar}>
                            <CloseIcon />
                        </IconButton>
                    }
                />
            </div>
        )
    }
}
