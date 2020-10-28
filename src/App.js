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
    <ItemListContainer title='BIENVENIDO' />
    <ItemCount stock="5" initial="1" />
    </>
  );
}

export default App;
