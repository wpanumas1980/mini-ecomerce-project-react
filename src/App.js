import { Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

import './App.css';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/cart'>
          <CartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
