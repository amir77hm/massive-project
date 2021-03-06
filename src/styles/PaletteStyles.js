import size from "./sizes";
const styles = {
    colorBoxes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        height: '88vh',
        overflow: 'hidden',
        [size.down('md')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(5, 1fr)',
        },
        [size.down('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(10, 1fr)',
        },
        [size.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridTemplateRows: 'repeat(20, 1fr)',
            height: '93vh',
            overflowY: 'scroll'
        },
    }
}

export default styles