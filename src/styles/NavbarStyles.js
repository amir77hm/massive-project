const styles = {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        height: '7vh',
    },
    NavbarLogo: {
        backgroundColor: '#ccc',
        fontSize: '2.2rem',
        height: '100%',
        padding: '0 3rem',
        fontFamily: '"Dancing Script", cursive',
        display: 'flex',
        alignItems: 'center',
    },
    NavbarSlider: {
        width: '35rem',
        margin: '0 1rem',
        '& .rc-slider-track': {
            backgroundColor: 'transparent'
        },
        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
            backgroundColor: 'green',
            outline: 'none',
            border: 'none',
            marginTop: -'3px',
        },
        '& .rc-slider-rail': {
            height: '0.8rem',
        }
    },
    NavbarSelect: {
        marginLeft: 'auto',
        marginRight: '1rem',
    },
    messageId: {
        fontSize: '1.2rem',
        textTransform: 'uppercase',
    },

}

export default styles