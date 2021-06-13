import React, { Component } from 'react'
import MiniPallete from "./MiniPallete";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import { Link } from 'react-router-dom';


class PaletteList extends Component {

    handleClick = (id) => {
        this.props.routeProps.history.push(`/palette/${id}`)
    }

    render() {
        const { palettes, classes } = this.props;
        const links = palettes.map(palette =>
            <MiniPallete
                {...palette}
                key={palette.id}
                deletePalette={this.props.deletePalette}
                handleClick={() => this.handleClick(palette.id)}
            />
        )

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new'>Create new palette</Link>
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