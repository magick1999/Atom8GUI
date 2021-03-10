import './App.css';
import MemberDashboard from './MemeberDashboard/MemberDashboard';
import NavBar from './NavBar/NavBar'
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
      </header>
        <div>
            <MemberDashboard/>
        </div>
    </div>
  );
}

export default App;
