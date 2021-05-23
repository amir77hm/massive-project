import React, { Component } from 'react'
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import './colorBox.scss'

export default class Palette extends Component {

    state = { level: 500 }


    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color =>
            <ColorBox color={color.hex} key={color.name} name={color.name} />
        )
        return (
            <div className='palette'>
                <Navbar
                    level={this.state.level}
                    changeLevel={(e) => { this.setState({ level: e }) }} />
                <div className='colorBox'>{colorBoxes}</div>
                <div className='footer'></div>
            </div>
        )
    }
}
