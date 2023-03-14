import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import About from './components/About/About';
import CreateActivity from './components/CreateActivity/CreateActivity';
import CountryDetails from './components/CountryDetails/CountryDetails'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path ='/' component={LandingPage} />
      <Route path = '/home' component = {Home} />
      <Route path = '/about' component = {About} />
      <Route path= '/activities' component = {CreateActivity} />
      <Route path='/countries/:id' render={({match}) => <CountryDetails id={match.params.id}/>} 
 />
    </div>
    </BrowserRouter>
  );
}

export default App;
