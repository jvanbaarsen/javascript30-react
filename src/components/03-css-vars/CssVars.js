import React, { Component } from 'react';
import { setComponentClass } from '../../utils'

import Control from './Control'

import './css/cssvars.scss'

class CssVars extends Component {
  componentDidMount() {
    setComponentClass("day-03-css-vars")
  }

  render() {
    return (
      <div className="App">
        <h2>Update CSS Variables with <span className='hl'>JS</span></h2>
        <div className="controls">
          <Control
            label="Spacing:"
            name="spacing"
            type="range"
            min="10"
            max="200"
            defaultValue="10"
            sizing="px" />

          <Control
            label="Blur:"
            name="blur"
            type="range"
            min="0"
            max="25"
            defaultValue="10"
            sizing="px" />

          <Control
            label="Base Color:"
            name="base"
            type="color"
            defaultValue="#ffc600" />
        </div>
        <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500"/>
      </div>
    );
  }
}

export default CssVars;
