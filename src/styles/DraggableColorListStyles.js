import size from "./sizes";

const styles = {
    colorBoxes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        height: 'calc(100vh - 64px)',
        overflow: 'scroll',
        [size.down('lg')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(5, 1fr)',
        },
        [size.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(10, 1fr)',
        },
        [size.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridTemplateRows: 'repeat(20, 1fr)',
        },
    }
}

export default styles;