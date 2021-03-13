import './App.css';
import MemberDashboard from './MemeberDashboard/MemberDashboard';
import NavBar from './NavBar/NavBar'
import Home from "./Home/Home";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

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
  return (
      <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
          <NavBar/>
      </header>
        <div>
            <MemberDashboard/>
        </div>
    </div>
      </ThemeProvider>

  );
}

export default App;
