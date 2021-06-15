import size from "./sizes";
const styles = {
    SingleColorPalette: {

    },
    colorBox: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        height: '88vh',
        overflow: 'hidden',
        [size.down('md')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
        },
        [size.down('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(5, 1fr)',
        },
        [size.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridTemplateRows: 'repeat(10, 1fr)',
            height: '93vh',
        },
    },
    goBack: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        backgroundColor: '#000',
    },
    backBtn: {
        textDecoration: 'none',
        color: '#fff',
        padding: '1rem 2.2rem',
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
            display: 'inline-block',
        }
    }
}

export default styles