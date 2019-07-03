import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter : 0
    }
  }

  increase = (event) => {
    event.preventDefault()
    this.setState({counter : this.state.counter + 1})
  }

  decrease = (event) => {
    event.preventDefault()
    if ( this.state.counter > 0) {
      this.setState({ counter: this.state.counter -1})
    }
  }

  render() {
    return (
      <div className = 'main'>
        <h1>Counter: {this.state.counter}</h1>
        <span>
          <button onClick = {this.increase}> Increase </button>
          <button onClick = {this.decrease}> Decrease </button>
        </span>
      </div>
    )
  }
}
export default App;
