import React, { PureComponent } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";

class MiniPallete extends PureComponent {
    deletePalette = (e) => {
        e.stopPropagation();
        this.props.deletePalette(this.props.id)
    }
    handleClick = () => {
        this.props.handleClick(this.props.id)
    }
    render() {
        const { classes, paletteName, emoji, colors } = this.props
        const miniColors = colors.map(color => {
            return <div className={classes.miniColors} key={color.name} style={{ backgroundColor: color.color }} />
        })
        return (
            <div className={classes.root} onClick={this.handleClick}>
                <div className={classes.delete} onClick={this.deletePalette}>
                    <DeleteIcon className={classes.deleteIcon} />
                </div>
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