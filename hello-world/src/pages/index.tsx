import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./main/index"

export default () => (
  <Router>
    <Route exact path="/" component={Main} />
  </Router>
)
