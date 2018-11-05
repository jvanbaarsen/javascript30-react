import React from 'react'

import { highlightSearchTerm } from './utils'

const Result = (props) => (
  <li>
    <span className="name">
      <span dangerouslySetInnerHTML={{__html: highlightSearchTerm(props.searchTerm, props.city.city)}}/>,&nbsp;
      <span dangerouslySetInnerHTML={{__html: highlightSearchTerm(props.searchTerm, props.city.state)}}/>
    </span>
    <span className="population">{parseInt(props.city.population).toLocaleString(navigator.language)}</span>
  </li>
)

export default Result
