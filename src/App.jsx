import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header'
import AllProducts from './pages/AllProducts';
import { Route, Switch } from 'react-router-dom';
import Basket from './pages/Basket';
import Delivery from './pages/Delivery';
import Recipes from './pages/Recipes';
import Payment from './pages/Payment';


const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <AllProducts />
        </Route>
        <Route exact path="/basket">
          <Basket />
        </Route>
        <Route exact path="/delivery">
          <Delivery />
        </Route>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App