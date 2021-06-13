import React from 'react'
import { withStyles } from "@material-ui/styles";
import DragableColorBox from "./DragableColorBox";
import { SortableContainer } from "react-sortable-hoc";
import styles from './styles/DraggableColorListStyles'

const DraggableColorList = SortableContainer((props) => {
    const { classes, colors, removeColor } = props
    return (
        <ul className={classes.colorBoxes}>
            {colors.map((color, i) =>
                <DragableColorBox
                    style={{ backgroundColor: color.color }}
                    key={color.color}
                    color={color}
                    removeColor={() => removeColor(color)}
                    index={i}
                >
                </DragableColorBox>
            )}
        </ul>
    )
})

export default withStyles(styles)(DraggableColorList)