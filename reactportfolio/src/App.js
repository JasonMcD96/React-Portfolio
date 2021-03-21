
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer';
import Contact from './Components/Contact'


function App() {
  return (
   
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/React-Portfolio" component={AboutMe} /> {/* Just in case, popped up during testing */}
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </Router>
        <Footer/>
      </div>

  );
}

export default App;
