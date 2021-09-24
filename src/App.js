
// components
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';








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
import NewsReadUrl from './pages/NewsReadUrl';
import Fashionlifestyleread from './pages/Fashionlifestyleread';
import Businessread from './pages/Businessread';
import Educationread from './pages/Educationread';
import Politicsread from './pages/Politicsread';
import Entertainmentsread from './pages/Entertainmentsread';
import Technologyread from './pages/Technologyread';
import Sportread from './pages/Sportread';
import Greaterlagosread from './pages/Greaterlagosread';


// General imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



// bootsrapt css
import 'bootstrap/dist/css/bootstrap.min.css';

// main css
import './App.css';
// import DTigersShockUS from './pages/TopStories/DTigersShockUS';
// import CanadaAppointsNigerianbornKayceeMadu from './pages/TopStories/CanadaAppointsNigerianbornKayceeMadu';
// import GovtboostMSMEs from './pages/TopStories/GovtboostMSMEs';
// import IkoroduBois from './pages/TopStories/IkoroduBois';
// import MikanoGeelyAssemblyPlant from './pages/TopStories/MikanoGeelyAssemblyPlant';
// import NigerianmathsprodigyFaithOdunsi from './pages/TopStories/NigerianmathsprodigyFaithOdunsi';
// import TheStoryofDeolaSagoe from './pages/TopStories/TheStoryofDeolaSagoe';
// import PiggyVestuduXunveilPopRev from './pages/TopStories/PiggyVestuduXunveilPopRev';



function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
      <MobileNavbar />
     
      
      
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
        <Route path="/newsReadUrl" exact component={NewsReadUrl}/>
        <Route path="/fashionlifestyleread" exact component={Fashionlifestyleread}/>
        <Route path="/businessread" exact component={Businessread}/>
        <Route path="/educationread" exact component={Educationread}/>
        <Route path="/politicsread" exact component={Politicsread}/>
        <Route path="/entertainmentsread" exact component={Entertainmentsread}/>
        <Route path="/technologyread" exact component={Technologyread}/>
        <Route path="/sportread" exact component={Sportread}/>
        <Route path="/greaterlagosread" exact component={Greaterlagosread}/>

        {/* <Route path="/dtigershockus" exact component={DTigersShockUS}/>
        <Route path="/canadaAppointsNigerianbornKayceeMadu" exact component={CanadaAppointsNigerianbornKayceeMadu}/>
        <Route path="/govtboostMSMEs" exact component={GovtboostMSMEs}/>
        <Route path="/ikoroduBois" exact component={IkoroduBois}/>
        <Route path="/mikanoGeelyAssemblyPlant" exact component={MikanoGeelyAssemblyPlant}/>
        <Route path="/nigerianmathsprodigyFaithOdunsi" exact component={NigerianmathsprodigyFaithOdunsi}/>
        <Route path="/theStoryofDeolaSagoe" exact component={TheStoryofDeolaSagoe}/>
        <Route path="/piggyVestuduXunveilPopRev" exact component={PiggyVestuduXunveilPopRev}/> */}
      
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
