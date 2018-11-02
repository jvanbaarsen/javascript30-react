import React from 'react'

class Control extends React.Component {
  handleChange = (event) => {
    document.documentElement.style.setProperty(
      `--${this.props.name}`,
      event.currentTarget.value + (this.props.sizing || "")
    )
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <input
          id={this.props.label}
          type={this.props.type}
          name={this.props.label}
          { ... (this.props.min !== null && { min: this.props.min}) }
          { ... (this.props.max !== null && { max: this.props.max}) }
          defaultValue={this.props.defaultValue}
          onChange={this.handleChange}
        />
      </React.Fragment>
    )
  }
}

export default Control
