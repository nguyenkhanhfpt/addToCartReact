import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Products from './pages/Products';
import TopMenu from './components/TopMenu';
import { CartProvider } from './contexts/CartContext';


class App extends React.Component {

  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <TopMenu />

            <Switch>
              <Route path="/products" exact>
                <Products />
              </Route>

            </Switch>
          </div>
        </Router>
      </CartProvider>
    );
  }

}

export default App;
