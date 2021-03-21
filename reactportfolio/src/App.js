import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <body>
        <Switch>
          <Route exact path="/" component={AboutMe}/>
          <Route exact path="/React-Portfolio" component={AboutMe}/> {/* Just in case, popped up during testing */}
        </Switch>
        </body>
      </Router>
    </div>
  );
}

export default App;
