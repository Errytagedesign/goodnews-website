
// components
import Navbar from './components/Navbar';
import TopNews from './pages/TopNews';


// General imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



// bootsrapt css
import 'bootstrap/dist/css/bootstrap.min.css';

// main css
import './App.css';


function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={TopNews}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
