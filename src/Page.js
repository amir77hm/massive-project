import React from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    '@global': {
        '.page-exit-active': {
            opacity: 0,
            transition: 'opacity 500ms ease-in'
        },
        '.page-enter': {
            opacity: 0,
        },
        '.page-enter-active': {
            opacity: 1,
            transition: 'opacity 500ms ease-in',
        }
    },
    page: {
        height: '100vh',
        position: 'fixed',
        width: '100%',
        top: '0',
        transition: 'opacity 500ms ease-in-out',
    }
}

function Page({ children, classes }) {
    return (
        <section className={classes}>
            {children}
        </section>
    )
}

export default withStyles(styles)(Page)