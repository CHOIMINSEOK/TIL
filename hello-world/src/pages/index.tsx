import React from "react"
import styled from "styled-components"

export default () => (
  <Wrapper>
    <Title>MSDB</Title>
    <Divider />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`

const Title = styled.div`
  font-weight: 10;
  font-size: 40px;
`

const Divider = styled.div`
  width: 400px;
  height: 2px;
  margin-top: 16px;
  background-color: #f7cac9;
`
