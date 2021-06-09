const styles = {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
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
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

export default styles