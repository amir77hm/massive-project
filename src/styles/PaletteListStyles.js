import size from "./sizes";
import background from './bg.svg'
const styles = {
    '@global': {
        '.fade-exit': {
            opacity: 1
        },
        '.fade-exit-active': {
            opacity: 0,
            transition: 'opacity 500ms ease-in'
        },
        '.fade-enter': {
            opacity: 0,
        },
        '.fade-enter-active': {
            opacity: 1,
            transition: 'opacity 500ms ease-in',
        }
    },
    root: {
        backgroundColor: '#fff',
        background: `no-repeat url(${background}) center center/cover`,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '3rem'
    },
    container: {
    },
    nav: {
        width: '100%',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '.9rem',
        '& a': {
            fontSize: '1.2rem',
            fontFamily: '"Roboto", sans-serif',
            color: '#000',
            [size.down('xs')]: {
                fontSize: '.8rem'
            },
        },
        [size.down('xs')]: {
            fontSize: '.6rem',
            padding: ' 1rem 0'
        },
    },
    palettes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '2rem',
        justifyItems: 'center',
        [size.down('md')]: {
            gridTemplateColumns: 'repeat(2,1fr)'
        },
        [size.down('xs')]: {
            gridTemplateColumns: 'repeat(1,1fr)'
        },
    }
}

export default styles