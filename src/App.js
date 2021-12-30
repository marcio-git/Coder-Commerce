import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './Buttons.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartView from './components/CartView';
import CartProvider from './context/cartContext';
import Checkout from './components/Checkout';
import Page404 from './components/Page404';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider defaultCart={[]}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer slogan='Don’t worry, we have it.' />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer slogan='Don’t worry, we have it.' />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <CartView />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route>
            <Page404 exact path="/404"/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
