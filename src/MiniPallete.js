import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";

class MiniPallete extends Component {
    render() {
        const { classes, paletteName, emoji, colors, handleClick } = this.props
        const miniColors = colors.map(color => {
            return <div className={classes.miniColors} key={color.name} style={{ backgroundColor: color.color }} />
        })
        return (
            <div className={classes.root} onClick={handleClick}>
                <div className={classes.color}>
                    {miniColors}
                </div>
                <h5 className={classes.title}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPallete)