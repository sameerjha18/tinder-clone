import './App.css';
import React from "react";
import Header from "./Header";
import TinderCard from './TinderCard';
import SwipeButton from './SwipeButton';

function App() {
  return (
    //BEM class naming conventions
    <div className="App">
      <Header/>
      <TinderCard/>
      <SwipeButton/>
    </div>
  );
}

export default App;
