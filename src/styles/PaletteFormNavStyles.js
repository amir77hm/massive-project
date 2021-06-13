import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from "./Constant";
import size from './sizes'

const drawerWidth = DRAWER_WIDTH;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& h6': {
            [size.down('sm')]: {
                display: 'none'
            }
        }
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#1769aa',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [size.down('sm')]: {
            width: `calc(100% - ${240}px)`,
        }
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    hide: {
        display: 'none',
    },
    navBtns: {
        display: 'flex',
        alignItems: 'center',
    },
    backBtn: {
        margin: '1rem'
    },

}));