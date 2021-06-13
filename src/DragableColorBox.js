import React from 'react'
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";


const styles = {
    root: {
        width: '100%',
        height: '100%',
        position: 'relative',
        padding: '.6rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        fontSize: '1rem',

    },
    DeleteIcon: {
        cursor: 'pointer',
        transition: 'all 0.4s',
        fontSize: '1.3rem',
        '&:hover': {
            color: '#fff',
            transform: 'scale(1.3)',
        }
    }
}

const DragableColorBox = SortableElement((props) => {
    return (<li
        className={props.classes.root}
        style={{ backgroundColor: props.color.color }}
    >
        {props.color.name}
        <DeleteIcon className={props.classes.DeleteIcon} onClick={props.removeColor} />
    </li>)
})

export default withStyles(styles)(DragableColorBox)