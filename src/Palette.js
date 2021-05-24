import React, { Component } from 'react'
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import './Palette.scss'

export default class Palette extends Component {

    state = { level: 500, format: 'hex' }

    handleChange = (format) => {
        this.setState({ format })
    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color =>
            <ColorBox color={color[this.state.format]} key={color.name} name={color.name} />
        )
        return (
            <div className='palette'>
                <Navbar
                    level={this.state.level}
                    changeLevel={(e) => { this.setState({ level: e }) }}
                    handleChange={this.handleChange}
                />
                <div className='colorBox'>{colorBoxes}</div>
                <div className='footer'>
                    <span className='footer__name'>{this.props.palette.paletteName}</span>
                    <span className='footer__emoji'>{this.props.palette.emoji}</span>
                </div>
            </div>
        )
    }
}
