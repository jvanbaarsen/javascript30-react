import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    const htmlEl = document.querySelector("html")
    htmlEl.classList.remove(...htmlEl.classList)
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/01-drumkit">01 Drumkit</Link></li>
          <li><Link to="/02-clock">02 Clock</Link></li>
          <li><Link to="/03-css-vars">03 CSS Vars</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
