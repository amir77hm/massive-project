const styles = {
    root: {
        border: '1px solid black',
        backgroundColor: '#dae1e4',
        borderRadius: '5px',
        padding: '0.4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '15rem',
        position: 'relative',

        '&:hover': {
            cursor: 'pointer'
        },
        '&:hover svg': {
            opacity: '1'
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
        fontSize: '1rem',
        alignItems: 'center',
        paddingTop: '0.5rem'
    },
    emoji: {
        fontSize: '1.3rem'
    },
    miniColors: {
        height: '1.9rem',
        width: '100%',
        margin: '0',
        padding: '0'
    },
    delete: {
        position: 'absolute',
        top: '0px',
        right: '0px',

    },
    deleteIcon: {
        padding: '.5rem',
        color: '#fff',
        borderRadius: '0 4px',
        backgroundColor: 'red',
        width: '2.5rem',
        height: '2.5rem',
        zIndex: '2',
        opacity: '0',
        transition: 'all .2s ease-in-out'
    },
}

export default styles