import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const clickHandler = () => {
    console.log('click')
    // this.setState({
    //   clicks: this.state.clicks += 1
    // })
  }


    return (
      <div className="App">
        <h3 className="clicks"> Clicks: {}</h3>
        <button onClick={clickHandler}>click me</button>
      </div>
    );


}

export default App;
