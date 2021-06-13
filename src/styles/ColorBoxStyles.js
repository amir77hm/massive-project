import chroma from "chroma-js";
import size from './sizes'

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
        [size.down('xs')]: {
            display: 'flex',
            alignItems: 'center'
        },
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
        [size.down('sm')]: {
            transition: 'transform .4s ease-in-out',
        },
    },
    show: {
        zIndex: '2',
        opacity: '1',
        transform: 'scale(30)',
        [size.down('sm')]: {
            transform: 'scale(60)',
        },
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
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white',
        [size.down('md')]: {
            fontSize: '2.7rem'
        },
    },
    name: {
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white',
        padding: '0.4rem',
        fontSize: '1rem',
    },
    copyTitle: {
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white',
        backgroundColor: props => chroma(props.color).luminance() <= 0.5 ? '#ffffff30' : '#00000030',
        width: '100%',
        textAlign: 'center',
        // padding: '0rem 0',
        // margin: '1rem 0',
        [size.down('md')]: {
            fontSize: '4rem'
        },
    },
    more: {
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white',
        backgroundColor: props => chroma(props.color).luminance() <= 0.5 ? '#ffffff25' : '#00000015',
        borderTopLeftRadius: '4px',
        fontSize: '.9rem',
        padding: '0.5rem',
        [size.down('xs')]: {
            padding: '0',
            backgroundColor: 'rgba(0,0,0,0) !important'
        }
    },
    copyButton: {
        color: props => chroma(props.color).luminance() >= 0.3 ? 'black' : 'white',
        opacity: '0',
        padding: '.5rem 2rem',
        fontSize: '1.1rem',
        borderRadius: '.6rem',
        backgroundColor: props => chroma(props.color).luminance() <= 0.5 ? '#ffffff30' : '#00000030',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        [size.down('xs')]: {
            padding: '2px 1rem',
            borderRadius: '3px',
        }
    },
}

export default styles