
import React from 'react';
import './App.css';
import './Buttons.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer slogan='Don’t worry, we have it.' />
    <ItemDetailContainer />
    </>
  );
}

export default App;
