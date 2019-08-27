import React, { useState } from "react"
import styled from "styled-components"
import SlideShow from "../components/slideShow"
import Layout from "../components/layout"

const ImageContainer = styled.div`
  height: 70vh;
  margin: 0 auto;
  max-width: 80%;
`

const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: center;
`

const Item = styled.li`
  display: inline;
  margin: 0 8px;
  transition: color 1s;
  font-family: "Poppins";
  text-decoration: none;
  color: ${props => (props.isActive ? `#27ae60` : `#263547`)};
  border-bottom: ${props =>
    props.isActive ? `1px solid #27ae60` : `1px solid transparent`};
  transition: all ease-in-out 0.25s;
  text-transform: capitalize;
  :hover {
    color: #27ae60;
    border-color: #27ae60;
    cursor: pointer;
  }
`

const categories = ["cities", "landscape", "wildlife", "crossfit", "weddings"]

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState("cities")
  return (
    <Layout>
      <CategoryList>
        {categories.map(c => (
          <Item
            onClick={() => setSelectedCategory(c)}
            isActive={selectedCategory === c}
          >
            {c}
          </Item>
        ))}
      </CategoryList>
      <ImageContainer>
        <SlideShow category={selectedCategory} />
      </ImageContainer>
    </Layout>
  )
}

export default Photography
