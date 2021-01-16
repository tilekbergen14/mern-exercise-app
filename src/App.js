import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import AddExercises from "./components/AddExercises"
import Exercises from "./components/Exercises"
import AddUsers from "./components/AddUsers"

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact><Exercises /></Route>
        <Route path="/add"><AddExercises /></Route>
        <Route path="/user"><AddUsers /></Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
