import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {action, originals  } from './Components/urls'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Orginals" />
      <RowPost url={action} title="Action" isSmall />
     
    </div>
  );
}

export default App;
