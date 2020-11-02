import React from 'react';
import './App.css';
import './Buttons.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Home';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer slogan='Don’t worry, we have it.' />
    <ItemCount stock="5" initial="1" />
    </>
  );
}

export default App;
