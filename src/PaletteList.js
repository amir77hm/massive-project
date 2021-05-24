import React, { Component } from 'react'
import MiniPallete from "./MiniPallete";
import { withStyles } from "@material-ui/styles";

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
        padding: '2rem'
    },
    palettes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

class PaletteList extends Component {

    render() {
        const { palettes, classes } = this.props;
        const links = palettes.map(palette => <MiniPallete {...palette} key={palette.paletteName} />)
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>React Colors</h1>
                    </div>
                    <div className={classes.palettes}>
                        {links}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)