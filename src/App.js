
import 'material-design-lite/dist/material.min.css';
//import 'material-design-lite/dist/material.purple-indigo.min.css';
import 'material-design-lite/dist/material.amber-lime.min.css';

import './App.css';

import { useEffect, useState } from 'react';
import { actions } from './store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { store } from './store/store';

import { Checkout } from './components/Checkout';
import { FilmDetails } from './components/FilmDetails';
import { LandingPage } from './components/LandingPage';
import { PickSeats } from './components/PickSeats';
import { NotFound } from './components/NotFound';
import { Login } from './authentication/Login';
import { Logout } from './authentication/Logout';
import { Account } from './authentication/Account';
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import './helpers/Date';
import './helpers/Currency';
import 'material-design-lite/material';


const styles = {
  navlink: {
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '10px'
  }
};

function App() {

  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => setState({ ...store.getState() }));
    store.dispatch(actions.fetchInitialData());
  }, []);

  return (
    <BrowserRouter>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <a href="/" style={styles.navlink} className="mdl-layout-title">Dinner and a Movie</a>
            {state.user ? (<nav className="mdl-navigation mdl-layout--large-screen-only">
              <a href="/account" className="mdl-layout__tab">My account</a>
              <a href="/logout" className="mdl-layout__tab">logout</a>
              <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a> </nav>) :
              (<nav className="mdl-navigation mdl-layout--large-screen-only">
                <a href="/login" className="mdl-layout__tab">Login</a>
                <a href="/register" className="mdl-layout__tab">Register</a>
              </nav>)}
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <a href="/" style={styles.navlink} className="mdl-layout-title">Dinner and a Movie</a>
          {state.user ? (<nav className="mdl-navigation">
            <a href="/account" className="mdl-layout__link">My account</a>
            <a href="/logout" className="mdl-layout__link">logout</a>
            <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a></nav>) :
            (<nav className="mdl-navigation"> <a href="/login" className="mdl-layout__link">Login</a>
              <a href="/register" className="mdl-layout__link">Register</a>
            </nav>)}
        </div>
        <main className="mdl-layout__content">
          <Routes>
          <Route exact path="/" element={<LandingPage {...state}/>}></Route>
            <Route  path="/account" element={<Account/>}></Route>
            <Route  path="/login" element={<Login/>}></Route>
            <Route  path="/logout" element={<Logout/>}></Route>
            <Route  path="/register" element={<Account/>}></Route>
            <Route  path="/checkout" element={<Checkout/>}></Route>
            <Route  path="/film/:filmId" element={<FilmDetails/>}></Route>
            <Route  path="/pickseats/:showingId" element={<PickSeats/>}></Route>
            <Route  path="*" element={<NotFound/>}></Route>
          </Routes>
        </main>
        <footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
