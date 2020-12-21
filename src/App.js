import './App.css';
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
     
    </div>
  );
}

export default App;
