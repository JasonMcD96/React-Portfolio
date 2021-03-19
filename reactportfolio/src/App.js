import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          {/* <Route exact path="/" component={} */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
