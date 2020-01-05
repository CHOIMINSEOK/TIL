import React from "react"
import styled from "styled-components"
import { Category } from "./categories"

export interface ICategoryGridProps {
  categories: Category[]
}

const CategoryGrid: React.FC<ICategoryGridProps> = ({ categories }) => {
  return (
    <Wrapper>
      {categories.map(category => (
        <div>{category.title}</div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default CategoryGrid
