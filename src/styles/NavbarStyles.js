import size from './sizes'
const styles = {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        height: '7vh',
    },
    NavbarLogo: {
        backgroundColor: '#ccc',
        fontSize: '1.7rem',
        height: '100%',
        padding: '0 2rem',
        fontFamily: '"Dancing Script", cursive',
        display: 'flex',
        alignItems: 'center',
        [size.down('md')]: {
            fontSize: '1.5rem',
            padding: '0 .7rem'
        },
        [size.down('xs')]: {
            fontSize: '1.2rem'
        },
    },
    NavbarSlider: {
        width: '22rem',
        margin: '0 1rem',
        [size.down('md')]: {
            width: '17rem',
        },
        [size.down('xs')]: {
            width: '10rem',
        },
        '& .rc-slider-track': {
            backgroundColor: 'transparent'
        },
        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
            backgroundColor: 'green',
            outline: 'none',
            border: 'none',
            marginTop: '-3px',
        },
        '& .rc-slider-rail': {
            height: '0.5rem',
        }
    },
    NavbarSelect: {
        marginLeft: 'auto',
        marginRight: '1rem',
    },
    messageId: {
        fontSize: '1rem',
        textTransform: 'uppercase',
        [size.down('xs')]: {
            fontSize: '.8rem',
        },
    },

}

export default styles