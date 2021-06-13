import size from "./sizes";
const styles = {
    footer: {
        height: '5vh',
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [size.down('xs')]: {
            display: 'none',
        },
    },
    footer__emoji: {
        margin: '0 0.7rem',
    }
}

export default styles