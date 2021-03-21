
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio'


function App() {
  return (
   
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/React-Portfolio" component={AboutMe} /> {/* Just in case, popped up during testing */}
            <Route exact path="/Portfolio" component={Portfolio} />
          </Switch>
        </Router>
      </div>

  );
}

export default App;
