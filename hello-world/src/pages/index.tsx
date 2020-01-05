import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Main from "./main/index"
import DetailPage from "./detail"

export const routes = {
  LIFE: "/life",
  DEV: "/dev",
}

export default () => (
  <Router>
    <Route exact path="/" component={Main} />
    <Route path={routes.LIFE} component={DetailPage} />
    <Route path={routes.DEV} component={DetailPage} />
  </Router>
)
