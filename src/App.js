import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    clicks: 0
  }

  clickHandler = () => {
    // console.log('click')
    this.setState({
      clicks: this.state.clicks += 1
    })
  }

  render(){
    return (
      <div className="App">
        <h3 className="clicks"> Clicks: {this.state.clicks}</h3>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    );
  }

}

export default App;
