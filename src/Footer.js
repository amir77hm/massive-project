import React from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    footer: {
        height: '5vh',
        fontSize: '1.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    footer__emoji: {
        margin: '0 0.7rem'
    }
}

function Footer(props) {

    const { paletteName, emoji, classes } = props

    return (
        <div className={classes.footer}>
            <span className={classes.footer__name}>{paletteName}</span>
            <span className={classes.footer__emoji}>{emoji}</span>
        </div>
    )
}

export default withStyles(styles)(Footer)