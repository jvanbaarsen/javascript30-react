import React from 'react'

class Panel extends React.Component {
  panelRef = React.createRef()

  state = {
    open: false,
    active: false
  }

  clickPanel = () => {
    this.setState({open: !this.state.open})
  }

  componentDidMount() {
    this.panelRef.current.addEventListener("transitionend", (e) => {
      if (e.propertyName.includes('flex')) {
        this.setState({active: !this.state.active})
      }
    })
  }

  render() {
    return (
      <div
        ref={this.panelRef}
        className={`panel ${this.props.panel.cssClass}
          ${this.state.active ? 'open-active' : ''}
          ${this.state.open ? 'open' : ''} `}
        onClick={this.clickPanel}>
        {this.props.panel.words.map((word, i) => (
          <p key={i}>{word}</p>
        ))}
      </div>
    )
  }
}

export default Panel
