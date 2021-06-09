const styles = {
    root: {
        border: '1px solid black',
        backgroundColor: '#dae1e4',
        borderRadius: '5px',
        padding: '0.5rem',

        '&:hover': {
            cursor: 'pointer'
        }
    },
    color: {
        overflow: 'hidden',
        borderRadius: '5px',
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
        width: '25%',
        display: 'inline-block',
        margin: '0 auto',
        marginBottom: '-3px',
    }
}

export default styles