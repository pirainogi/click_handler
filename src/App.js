import React, { useState } from 'react';
import './App.css';

function App() {

  const [clicks, setClicks] = useState(0)

  return (
    <div className="App">
      <h3 className="clicks"> Clicks: {clicks}</h3>
      <button onClick={() => setClicks(clicks + 1)}>click me</button>
    </div>
  );

}

export default App;
