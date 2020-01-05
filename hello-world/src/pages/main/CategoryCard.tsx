import React from "react"
import styled from "styled-components"
import { Category } from "./categories"

export interface ICategoryCardProps {
  category: Category
}

const CategoryCard: React.FC<ICategoryCardProps> = ({ category }) => {
  return (
    <Wrapper>
      <div>{category.title}</div>
      <div>{category.description}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 0 4px 6px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`

export default CategoryCard
