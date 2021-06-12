import React from 'react'
import { withStyles } from "@material-ui/styles";
import DragableColorBox from "./DragableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const styles = {
    colorBoxes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        height: '88vh',
        overflow: 'hidden',
    }
}

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