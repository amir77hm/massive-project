import React from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        width: '100%',
        height: '100%',
        position: 'relative'
    }
}

function DragableColorBox(props) {
    console.log(props)
    return <div className={props.classes.root} style={{ backgroundColor: props.color.color }}>{props.color.name}</div>
}

export default withStyles(styles)(DragableColorBox)