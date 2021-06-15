import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/styles";
import { Avatar } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemAvatar } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { red, blue } from "@material-ui/core/colors";
import MiniPallete from "./MiniPallete";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {

    state = {
        openDeleteDialog: false,
        deletingId: ''
    }

    handleClick = (id) => {
        this.props.routeProps.history.push(`/palette/${id}`)
    }

    openDeleteDialog = () => {
        this.setState({ openDeleteDialog: true })
    }

    closeDeleteDialog = () => {
        this.setState({ openDeleteDialog: false })
    }

    deletingPalette = (id) => {
        this.openDeleteDialog()
        this.setState({ deletingId: id })
    }

    deletePalette = () => {
        this.props.deletePalette(this.state.deletingId)
        this.setState({
            openDeleteDialog: false,
            deletingId: ''
        })
    }

    render() {
        const { palettes, classes } = this.props;

        const links = palettes.map(palette =>
            <CSSTransition
                key={palette.id}
                timeout={500}
                classNames="fade"
            >
                <MiniPallete
                    {...palette}
                    deletePalette={this.deletingPalette}
                    handleClick={this.handleClick}
                />
            </CSSTransition>
        )
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new'>Create new palette</Link>
                    </div>
                    <TransitionGroup className={classes.palettes} >
                        {links}
                    </TransitionGroup>
                </div>
                <Dialog
                    open={this.state.openDeleteDialog}
                    aria-labelledby='delete-dialog-title'
                    onClose={this.closeDeleteDialog}
                >
                    <DialogTitle id='delete-dialog-title'>Delete this palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.deletePalette}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: blue[100], color: blue[700] }}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Delete</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDeleteDialog}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: red[100], color: red[700] }}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Cancel</ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)