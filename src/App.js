import React from 'react';
import CicloVida from './CicloVida';
import Tablero from './Tablero';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //<h1>Hola</h1>
    <div>
      <CicloVida nombre="Carlos" descripcion="un ejemplo de ciclo de vida"/>
      <Tablero />
    </div>
    
  );
}

export default App;
