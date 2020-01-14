import React from "react"
import { Router, Link } from "@reach/router"
import Main from "./main"
import DetailPage from "./detail"

export const routes = {
  LIFE: "/life",
  DEV: "/dev",
}

export default () => <Main />
