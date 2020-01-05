import React from "react"
import { Router, Link } from "@reach/router"
import Main from "./main/index"
import DetailPage from "./detail"

export const routes = {
  LIFE: "/life",
  DEV: "/dev",
}

export default () => (
  <Router>
    <Main path="/" />
    <DetailPage path="life" label="life" />
    {/* <Route exact path="/" component={Main} />
    <Route
      path={routes.LIFE}
      render={props => <DetailPage {...props} label="life" />}
    />
    <Route
      path={routes.DEV}
      render={props => <DetailPage {...props} label="dev" />}
    /> */}
  </Router>
)
