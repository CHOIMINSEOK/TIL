import React from "react"
import styled from "styled-components"

export interface IDetailPageProps {
  label: string
}

const DetailPage: React.FC<IDetailPageProps> = ({ label }) => {
  return <Wrapper>{label}</Wrapper>
}

const Wrapper = styled.div``

export default DetailPage
