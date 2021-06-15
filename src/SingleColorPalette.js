import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./styles/SingleColorPaletteStyles";
class SingleColorPalette extends Component {

    state = { format: 'hex' }

    constructor(props) {
        super(props)
        this.shades = this.gatherShades(this.props.palette.colors, this.props.colorId)
    }

    handleChange = (format) => {
        this.setState({ format })
    }

    gatherShades = (colors, filteredColor) => {
        let shades = []
        for (let key in colors) {
            shades = shades.concat(colors[key].filter(color => color.id === filteredColor))
        }
        return shades.slice(1);
    }

    render() {
        const colorBoxes = this.shades.map(color =>
            <ColorBox
                moreBtn={false}
                key={color.name}
                color={color[this.state.format]}
                name={color.name}
            />
        )
        const { classes, palette } = this.props

        return (
            <div className={classes.SingleColorPalette}>
                <Navbar
                    sliderShow={false}
                    handleChange={this.handleChange}
                />
                <div className={classes.colorBox}>
                    {colorBoxes}
                    <div className={`${classes.goBack} ${classes.backBox}`}>
                        <Link to={`/palette/${palette.id}`} className={classes.backBtn}>Go Back</Link>
                    </div>
                </div>
                <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette)