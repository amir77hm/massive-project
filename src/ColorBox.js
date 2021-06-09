import React, { Component } from 'react'
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from './styles/ColorBoxStyles'


class ColorBox extends Component {

    state = { copied: false }

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false })
            }, 1500)
        })
    }

    moreHandle = (e) => {
        e.stopPropagation()
    }

    render() {
        const { color, paletteId, colorId, name, moreBtn, classes } = this.props
        const isCopied = this.state.copied ? classes.show : ''
        const isCopiedMsg = this.state.copied ? classes.showMsg : ''

        return (
            <CopyToClipboard text={color} onCopy={this.changeCopyState}>
                <div className={classes.colorBox} style={{ backgroundColor: color }}>
                    <div className={classes.colorBox}>
                        <div className={classes.boxContent}>
                            <span className={classes.name}>{name}</span>
                            {moreBtn && <Link to={`/palette/${paletteId}/${colorId}`} onClick={this.moreHandle} >
                                <button className={classes.more}>More</button>
                            </Link>}
                        </div>
                        <button className={classes.copyButton}>copy</button>
                    </div>
                    <div className={`${classes.boxOverlay} ${isCopied}`} style={{ backgroundColor: color }}></div>
                    <div className={`${classes.copyMsg} ${isCopiedMsg}`}>
                        <h2 className={classes.copyTitle}>Copied</h2>
                        <span className={classes.copyText}>{color}</span>
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)