import React from 'react'
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from './styles/DraggableColorBoxStyles'

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