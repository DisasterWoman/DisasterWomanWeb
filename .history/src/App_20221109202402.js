import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router path="/" exact>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
