import './App.css';
import MemberDashboard from './MemeberDashboard/MemberDashboard';
import NavBar from './NavBar/NavBar'
import Home from "./Home/Home";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import React, {useEffect, useState} from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Paper from '@material-ui/core/Paper';
import Background from './resources/bg/background.jpg'
import BackgroundMobile from './resources/bg/background-mobil.jpg'
import useCheckMobileScreen from './Hooks/useCheckMobileScreen'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#68D8D6',
            main: '#07beb8',
            dark: '#182C3A',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffffff',
            main: '#ffffff',
            dark: '#ffffff',
            contrastText: '#000',
        },
    },
    typography: {
        fontFamily: [
            'Nunito',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
        backgroundImage: `url(${Background})`,
        backgroundSize: '100% 100%',
        height: '100%',
        width: '100%',
    },
    rootMobile: {
        textAlign: 'center',
        backgroundImage: `url(${BackgroundMobile})`,
        backgroundSize: '100% 100%',
        height: '100%',
        width: '100%',
    }
}));

function App() {
    const [currentRoute, setCurrentRoute] = useState('Home');

    const classes = useStyles();
    const device = useCheckMobileScreen();

    let background = classes.root;

    if (device){
        background = classes.rootMobile;
        console.log('in if');
        console.log(device);
    }else {
        background = classes.root;
    }

    console.log(currentRoute);

    let currentScreen;


    switch (currentRoute) {
        case 'Buy':
            // currentScreen = <Home/>;
            break;
        case 'Contact':
            // currentScreen = <Contact/>;
            break;
        case 'Home':
            currentScreen = <Home/>;
            break;
        case 'Meet the Team':
            // currentScreen = <Projects/>;
            break;
        case 'Dashboard':
            currentScreen = <MemberDashboard/>;
            break;
        case 'SignIn':
            currentScreen = <SignIn/>;
            break;
        case 'SignUp':
            currentScreen = <SignUp/>;
            break;
        case 'LogOut':
            currentScreen = <Home/>;
            break;
        default:
            console.log('Wrong screen');
    }
  return (
      <ThemeProvider theme={theme}>
    <Paper className={background}>
      <header className="App-header">
          <NavBar currentRoute={currentRoute} changeScreen={setCurrentRoute}/>
      </header>
        {currentScreen}
    </Paper>
      </ThemeProvider>

  );
}

export default App;
