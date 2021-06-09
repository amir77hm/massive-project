import React from 'react'
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";


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