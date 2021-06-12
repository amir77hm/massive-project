const styles = {
    root: {
        backgroundColor: 'blue',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '3rem'
    },
    container: {
        maxWidth: '750px',
    },
    nav: {
        width: '100%',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& a': {
            fontSize: '1.7rem',
            fontFamily: '"Roboto", sans-serif',
            color: '#000'
        }
    },
    palettes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '4rem',
        justifyItems: 'center',
    }
}

export default styles