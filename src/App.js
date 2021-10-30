
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
