import React, { Component } from 'react'
import Slider from "rc-slider";
import 'rc-slider/assets/index.css'
import './Navbar.scss'

export default class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props
        return (
            <div className='Navbar'>
                <div className='logo'>
                    <a href='# '>color picker</a>
                </div>
                <div className='slider'>
                    <Slider defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                    />
                </div>


            </div>
        )
    }
}
