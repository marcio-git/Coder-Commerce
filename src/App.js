import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Home';
function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer title='BIENVENIDO' />
    </>
  );
}

export default App;
