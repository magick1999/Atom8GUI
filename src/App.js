import './App.css';
import MemberDashboard from './MemeberDashboard/MemberDashboard';
import NavBar from './NavBar/NavBar'
import Home from "./Home/Home";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, {useState} from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

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
function App() {
    const [currentRoute, setCurrentRoute] = useState('Home');

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
    <div className="App">
      <header className="App-header">
          <NavBar currentRoute={currentRoute} changeScreen={setCurrentRoute}/>
      </header>
        <div>
            {currentScreen}
        </div>
    </div>
      </ThemeProvider>

  );
}

export default App;
