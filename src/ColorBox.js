import React, { Component } from 'react'
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

const styles = {
    colorBox: {
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
            cursor: 'pointer',
            display: 'inline-block',
        }
    },
    boxContent: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: '0',
        right: '0',
        left: '0',
    },
    boxOverlay: {
        opacity: '0',
        zIndex: '-1',
        transition: 'transform 1s ease-in-out',
        transform: 'scale(0)',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
    },
    show: {
        zIndex: '2',
        opacity: '1',
        transform: 'scale(30)',
    },
    copyMsg: {
        position: 'fixed',
        top: '0',
        right: '0',
        left: '0',
        bottom: '0',
        opacity: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'scale(0.1)',
        fontSize: '5rem',
        transition: 'transform 0.3s ease-in',
        color: '#000',
        flexDirection: 'column',
    },
    showMsg: {
        zIndex: '2',
        opacity: '1',
        transform: 'scale(1)',
    },
    copyText: {
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white'
    },
    name: {
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white',
        padding: '0.6rem',
        fontSize: '1.4rem',
    },
    copyTitle: {
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white',
        backgroundColor: props => chroma(props.color).luminance() <= 0.5 ? '#ffffff30' : '#00000030',
        width: '100%',
        textAlign: 'center',
        padding: '1rem 0',
        margin: '1rem 0',
    },
    more: {
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white',
        backgroundColor: props => chroma(props.color).luminance() <= 0.5 ? '#ffffff25' : '#00000015',
        borderTopLeftRadius: '4px',
        fontSize: '1.4rem',
        padding: '0.6rem',
    },
    copyButton: {
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white',
        opacity: '0',
        padding: '1.1rem 4rem',
        fontSize: '1.9rem',
        borderRadius: '1rem',
        backgroundColor: props => chroma(props.color).luminance() <= 0.5 ? '#ffffff30' : '#00000030',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },

}
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