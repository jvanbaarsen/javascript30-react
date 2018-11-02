import React, { Component } from 'react';
import { setComponentClass } from '../../utils'
import Key from './Key'

import ClapAudio from './sounds/clap.wav'
import HihatAudio from './sounds/hihat.wav'
import KickAudio from './sounds/kick.wav'
import OpenhatAudio from './sounds/openhat.wav'
import BoomAudio from './sounds/boom.wav'
import RideAudio from './sounds/ride.wav'
import SnareAudio from './sounds/snare.wav'
import TomAudio from './sounds/tom.wav'
import TinkAudio from './sounds/tink.wav'

import './css/drumkit.scss'

class App extends Component {
  componentDidMount() {
    setComponentClass("day-01-drumkit")
  }

  render() {
    return (
      <div className="keys">
        <Key keyCode={ 65 } letter="A" name="clap" audioFile={ClapAudio} />
        <Key keyCode={ 83 } letter="S" name="Hihat" audioFile={HihatAudio} />
        <Key keyCode={ 68 } letter="D" name="Kick" audioFile={KickAudio} />
        <Key keyCode={ 70 } letter="F" name="Openhat" audioFile={OpenhatAudio} />
        <Key keyCode={ 71 } letter="G" name="Boom" audioFile={BoomAudio} />
        <Key keyCode={ 72 } letter="H" name="Ride" audioFile={RideAudio} />
        <Key keyCode={ 74 } letter="J" name="Snare" audioFile={SnareAudio} />
        <Key keyCode={ 75 } letter="K" name="Tom" audioFile={TomAudio} />
        <Key keyCode={ 76 } letter="L" name="Tink" audioFile={TinkAudio} />
      </div>
    );
  }
}

export default App;
