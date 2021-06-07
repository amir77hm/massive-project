import React, { Component } from 'react'
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
    SingleColorPalette: {

    },
    colorBox: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        height: '88vh',
        overflow: 'hidden',

    },
    goBack: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        backgroundColor: '#000',
    },
    backBtn: {
        textDecoration: 'none',
        color: '#fff',
        padding: '1.2rem 2.5rem',
        borderRadius: '0.4rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#ffffff30'
        }
    },
    backBox: {
        width: '100%',
        height: '100%',
        position: 'relative',
        '&:hover button': {
            opacity: '1'
        },
        '& button': {
            border: 'none',
            outline: 'none',
            transition: 'all 0.4s',
            // cursor: 'pointer',
            display: 'inline-block',
        }
    }
}
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