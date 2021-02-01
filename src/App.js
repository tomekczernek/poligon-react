import { createContext } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Menu, { Link } from "./components/Menu";
import Footer from "./components/Footer";
import Users from "./pages/Users";
import UserDetails from "./pages/Users/UserDetails";
import UserUpdate from "./pages/Users/UserUpdate";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import SecureRouts from "./hoc/SecureRouts";
import Tickets from "./pages/Tickets";
import ticketReducer from "./pages/Tickets/duck";

const store = createStore(
  combineReducers({
    tickets: ticketReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({type: 'tickets/load'});
//store.dispatch({type: 'tickets/add', payload: {id: 1, title: 'NIe działa', description: 'bo tak'}});
//store.dispatch({type: 'tickets/reset'});

const themes = {
  blue: {
    color: "blue",
  },
  red: {
    color: "red",
  },
};

export const Theme = createContext(themes.red);
Theme.displayName = "Theme";

const authData = {
  isLogged: true,
  user: {},
};
export const Auth = createContext(authData);
Auth.displayName = "Auth";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Menu>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/tickets">Tickets</Link>
          </Menu>
          <hr />
          <Switch>
            <Auth.Provider value={authData}>
              <SecureRouts
                path="/users/:bizon/update"
                Component={UserUpdate}
              ></SecureRouts>
              <SecureRouts
                path="/users/:bizon"
                Component={UserDetails}
              ></SecureRouts>
              <Theme.Provider value={themes.red}>
                <SecureRouts path="/users" Component={Users}></SecureRouts>
              </Theme.Provider>
              <SecureRouts path="/contact" Component={Contact}></SecureRouts>
              <Theme.Provider value={themes.blue}>
                <SecureRouts path="/counter" Component={Counter}></SecureRouts>
              </Theme.Provider>
              <SecureRouts path="/tickets" Component={Tickets}></SecureRouts>
              <Route path="/" exact>
                <Home />
              </Route>
            </Auth.Provider>
          </Switch>
        </Router>
        <hr />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
