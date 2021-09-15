
// components
import Navbar from './components/Navbar';





// pages
import HeadlineStories from './pages/HeadlineStories';
import TopStories from './pages/TopStories';
import Technology from './pages/Technology';
import Sport from './pages/Sport';
import Politics from './pages/Politics';
import Opinion from './pages/Opinion';
import GreaterLagos from './pages/GreaterLagos';
import FashionLifestyle from './pages/FashionLifestyle';
import Entertainments from './pages/Entertainments';
import Education from './pages/Education';
import BusinessFinance from './pages/BusinessFinance';
import Headline1 from './pages/Headline1';
import Headline2 from './pages/Headline2';
import Headline3 from './pages/Headline3';


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
        <Route path="/" exact component={TopStories}/>
        <Route path="/headlineStories" exact component={HeadlineStories}/>
        <Route path="/technology" exact component={Technology}/>
        <Route path="/sport" exact component={Sport}/>
        <Route path="/politics" exact component={Politics}/>
        <Route path="/opinion" exact component={Opinion}/>
        <Route path="/greaterLagos" exact component={GreaterLagos}/>
        <Route path="/fashionLifestyle" exact component={FashionLifestyle}/>
        <Route path="/entertainments" exact component={Entertainments}/>
        <Route path="/education" exact component={Education}/>
        <Route path="/businessFinance" exact component={BusinessFinance}/>
        <Route path="/headline1" exact component={Headline1}/>
        <Route path="/headline2" exact component={Headline2}/>
        <Route path="/headline3" exact component={Headline3}/>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
