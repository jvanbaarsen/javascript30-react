import React from 'react'

class Key extends React.Component {
  audioPlayer = React.createRef()
  keyElement = React.createRef()

  state = {
    keyDown: false,
    playing: false
  }

  handleKeyDown = (event) => {
    if(event.keyCode === this.props.keyCode && !this.state.keyDown) {
      this.setState({ keyDown: true, playing: true })
      this.audioPlayer.current.fastSeek(0)
      this.audioPlayer.current.play()
    }
  }

  handleKeyUp = () => {
    this.setState({ keyDown: false })
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
    document.addEventListener("keyup", this.handleKeyUp)
    this.keyElement.current.addEventListener("transitionend", (event) => {
      if(event.propertyName === "transform" && this.state.playing) {
        this.setState({ playing: false })
      }
    })
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
    document.removeEventListener("keyup", this.handleKeyUp)
  }

  render() {
    return (
      <div ref={this.keyElement} className={ `key ${this.state.playing ? "playing" : ""}` }>
        <kbd>{this.props.letter}</kbd>
        <span className="sound">{this.props.name}</span>
        <audio ref={this.audioPlayer} src={this.props.audioFile} preload="true"></audio>
      </div>
    )
  }
}

export default Key
