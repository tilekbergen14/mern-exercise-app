import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route , Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import AddExercises from "./components/AddExercises"
import Exercises from "./components/Exercises"
import AddUsers from "./components/AddUsers"
import UpdateExercises from  "./components/UpdateExercises"

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact><Exercises /></Route>
          <Route path="/add"><AddExercises /></Route>
          <Route path="/users"><AddUsers /></Route>
          <Route path="/:id" exact component={UpdateExercises} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
