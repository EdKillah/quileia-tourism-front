import './App.css';

import CitiesList from './components/City/CitiesList';
import CityHistory from './components/City/CityHistory';
import TouristHistory from './components/Tourist/TouristHistory';
import TouristList from './components/Tourist/TouristList';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  //<Tourist />
  //<CitiesList />
  //const CitiesList = () => <CitiesList />;
  return (        
  <div className="App">
     <Router>
       <Navbar />
        <Switch>             
          <Route exact path="/" component={Welcome} />         
          <Route exact path="/cities" component={CitiesList} />         
          <Route exact path="/tourists" component={TouristList} />         
          <Route path="/city/:id" children={<CityHistory />} />                           
          <Route path="/tourist/:id" children={<TouristHistory />} />                           
        </Switch>
        <Footer />
      </Router>  
      
  </div>
  );
}


export default App;