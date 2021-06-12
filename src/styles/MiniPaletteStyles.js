const styles = {
    root: {
        border: '1px solid black',
        backgroundColor: '#dae1e4',
        borderRadius: '5px',
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '22rem',

        '&:hover': {
            cursor: 'pointer'
        }
    },
    color: {
        overflow: 'hidden',
        borderRadius: '5px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        backgroundColor: '#ccc',
        boxShadow: 'inset 0 0 2px #000000',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.5rem',
        alignItems: 'center',
        paddingTop: '0.5rem'
    },
    emoji: {
        fontSize: '1.7rem'
    },
    miniColors: {
        height: '3rem',
        width: '100%',
        margin: '0',
        padding: '0'
    }
}

export default styles