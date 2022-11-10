import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Sw } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Navbar />
      </Route>
    </div>
  );
}

export default App;
