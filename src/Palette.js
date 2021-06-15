import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./styles/PaletteStyles";

class Palette extends Component {
    state = { level: 500, format: 'hex' }

    handleChange = (format) => {
        this.setState({ format })
    }

    render() {

        const { classes } = this.props
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => {
            return < ColorBox
                color={color[this.state.format]}
                key={color.name} name={color.name}
                paletteId={this.props.palette.id}
                colorId={color.id}
                moreBtn={true}
            />
        })

        return (
            <div className='palette'>
                <Navbar
                    level={this.state.level}
                    changeLevel={(e) => { this.setState({ level: e }) }}
                    handleChange={this.handleChange}
                    sliderShow={true}
                />
                <div className={classes.colorBoxes}>{colorBoxes}</div>
                <Footer
                    paletteName={this.props.palette.paletteName}
                    emoji={this.props.palette.emoji}
                />
            </div>
        )
    }
}

export default withStyles(styles)(Palette)