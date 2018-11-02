import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'

import Drumkit from './01-drumkit/Drumkit'
import Clock from './02-clock/Clock'
import CssVars from './03-css-vars/CssVars'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/01-drumkit" component={Drumkit} />
      <Route exact path="/02-clock" component={Clock} />
      <Route exact path="/03-css-vars" component={CssVars} />
    </Switch>
  </BrowserRouter>
)

export default Router
