import React from 'react'

const Hand = (props) => (
  <div style={{ transform: `rotate(${props.degree}deg)` }} className="hand"></div>
)

export default Hand
