import chroma from 'chroma-js'
const styles = {
    root: {
        width: '100%',
        height: '100%',
        position: 'relative',
        padding: '.6rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        fontSize: '1rem',
        color: props => chroma(props.color.color).luminance() >= 0.2 ? 'black' : 'white',
    },
    DeleteIcon: {
        color: props => chroma(props.color.color).luminance() >= 0.2 ? 'black' : 'white',
        cursor: 'pointer',
        transition: 'all 0.4s',
        fontSize: '1.3rem',
        '&:hover': {
            transform: 'scale(1.3)',
        }
    }
}

export default styles