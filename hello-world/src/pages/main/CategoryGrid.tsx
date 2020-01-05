import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Category } from "./categories"
import CategoryCard from "./CategoryCard"

export interface ICategoryGridProps {
  categories: Category[]
}

const CategoryGrid: React.FC<ICategoryGridProps> = ({ categories }) => {
  return (
    <Wrapper>
      {categories.map(category => (
        <Link to={category.to} style={{ textDecoration: "none" }}>
          <CategoryCard category={category} />
        </Link>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  width: 800px;
  justify-content: space-around;
`

export default CategoryGrid
