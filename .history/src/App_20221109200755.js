import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact></Route>
    <Navbar/>
    </div>
  );
}

export default App;