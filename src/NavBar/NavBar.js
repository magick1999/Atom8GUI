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
        backgroundColor: 'white',
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
                    <Button className={classes.link} onClick={() => props.changeScreen('Home')}>
                        Home
                    </Button>
                    <Button className={classes.link}>
                        Buy
                    </Button>
                    <Button className={classes.link}>
                        Contact&Support
                    </Button>
                    <Button className={classes.link}>
                        Meet the Team
                    </Button>
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
                    <Button className={classes.link} onClick={() => props.changeScreen('Dashboard')}>
                        Dashboard
                    </Button>
                    <Button className={classes.link}>
                        Buy
                    </Button>
                    <Button className={classes.link}>
                        Contact&Support
                    </Button>
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
        <CustomNavigation currentRoute={props.currentRoute}/>
    );
}
