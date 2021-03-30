import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../resources/logo-mare.png';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },

}));

export default function NavBar(props) {

    const classes = useStyles();
    const homeNav = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <Box m={1}>
                    <img src={Logo} alt='Logo' width={150} height={75}/>
                </Box>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => props.changeScreen('Home')}>
                        Home
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Buy
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Contact&Support
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Meet the Team
                    </Link>
                </nav>
                <div>
                    <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={() => props.changeScreen('SignIn')}>
                        Sign In
                    </Button>
                    <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={() => props.changeScreen('SignUp')}>
                        Sign Up
                    </Button>
                </div>
            </Toolbar>
        );
    };

    const dashboardNav = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <Box m={1}>
                    <img src={Logo} alt='Logo' width={150} height={75}/>
                </Box>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={() => props.changeScreen('Dashboard')}>
                        Dashboard
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Buy
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Contact&Support
                    </Link>
                </nav>
                <div>
                    <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={() => props.changeScreen('LogOut')}>
                        Log Out
                    </Button>
                </div>
            </Toolbar>
        );
    };

    function CustomNavigation(props) {
        console.log(props);
        const type = props.currentRoute;
        if (type === 'Home' || type === 'LogOut') {
            return homeNav();
        } else {
            return dashboardNav();
        }
    }

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <CustomNavigation currentRoute={props.currentRoute}/>
        </AppBar>
    );
}
