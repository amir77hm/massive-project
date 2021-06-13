import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from "./Constant";
import size from './sizes'

const drawerWidth = DRAWER_WIDTH;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        [size.down('sm')]: {
            width: '240px',
        }
    },
    drawerPaper: {
        width: drawerWidth,
        [size.down('sm')]: {
            width: '240px',
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        [size.down('sm')]: {
            marginLeft: '-240px',
        }
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    createBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '80%',
        textAlign: 'center',
        '& Button': {
            margin: '0.4rem',
            fontSize: '.7rem',
            [size.down('sm')]: {
                fontSize: '.5rem'
            }
        },
        '& h4': {
            fontSize: '1.7rem',
            [size.down('sm')]: {
                fontSize: '1.2rem'
            }
        }
    },
}));
