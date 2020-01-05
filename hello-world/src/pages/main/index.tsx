import React from "react"
import styled from "styled-components"
import CategoryGrid from "./CategoryGrid"
import categories from "./categories"

export default () => (
  <Wrapper>
    <Title>MSDB</Title>
    <Divider />
    <CategoryGrid categories={categories} />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  padding-top: 140px;
`

const Title = styled.div`
  font-weight: 10;
  font-size: 55px;
`

const Divider = styled.div`
  width: 400px;
  height: 2px;
  margin-top: 16px;
  margin-bottom: 55px;
  background-color: black;
`
