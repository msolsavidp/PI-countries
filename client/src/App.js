import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CreateActivity from './components/CreateActivity/CreateActivity';
import CountryDetails from './components/CountryDetails/CountryDetails'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path ='/' component={LandingPage} />
      <Route path = '/home' component = {Home} />
      <Route path= '/activities' component = {CreateActivity} />
      <Route path= '/countries/:id' component = {CountryDetails} />
    </div>
    </BrowserRouter>
  );
}

export default App;
