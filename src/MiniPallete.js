import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        border: '1px solid black',
        backgroundColor: '#dae1e4',
        borderRadius: '5px',
        padding: '0.5rem',

        '&:hover': {
            cursor: 'pointer'
        }
    },
    color: {
        overflow: 'hidden',
        borderRadius: '5px',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.5rem',
        alignItems: 'center',
        paddingTop: '0.5rem'
    },
    emoji: {
        fontSize: '1.7rem'
    },
    miniColors: {
        height: '3rem',
        width: '25%',
        display: 'inline-block',
        margin: '0 auto',
        marginBottom: '-3px',
    }
}
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