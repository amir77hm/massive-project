const styles = {
    SingleColorPalette: {

    },
    colorBox: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        height: '88vh',
        overflow: 'hidden',

    },
    goBack: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        backgroundColor: '#000',
    },
    backBtn: {
        textDecoration: 'none',
        color: '#fff',
        padding: '1.2rem 2.5rem',
        borderRadius: '0.4rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#ffffff30'
        }
    },
    backBox: {
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
            // cursor: 'pointer',
            display: 'inline-block',
        }
    }
}

export default styles