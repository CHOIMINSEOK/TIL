import React from "react"
import { Router, Link } from "@reach/router"
import Main from "./main"
import LifeArchive from "./life"

export const routes = {
  LIFE: "/life",
  DEV: "/dev",
}

export default () => <Main />
