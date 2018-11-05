import React from 'react'
import { setComponentClass } from '../../utils'

import Panel from './Panel'

import './css/flexpanels.scss'

class FlexPanel extends React.Component {
  panels = [
    {
      cssClass: "panel1",
      words: ["Hey", "Let's", "Dance" ]
    },
    {
      cssClass: "panel2",
      words: ["Give", "Take", "Receive" ]
    },
    {
      cssClass: "panel3",
      words: ["Experience", "It", "Today" ]
    },
    {
      cssClass: "panel4",
      words: ["Give", "All", "You can" ]
    },
    {
      cssClass: "panel5",
      words: ["Life", "In", "Motion" ]
    }
  ]


  componentDidMount() {
    setComponentClass("day-05-flex-panels")
  }

  render() {
    return (
      <div className="panels">
        { this.panels.map((panel, i) => (
          <Panel key={i} panel={panel} />
        ))}
      </div>
    )
  }
}

export default FlexPanel
