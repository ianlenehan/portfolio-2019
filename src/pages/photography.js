import React, { useState } from "react"
import styled from "styled-components"
import Photos from "../components/photos"
import Layout from "../components/layout"

const CategoryList = styled.ul`
  list-style: none;
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

  @media only screen and (max-device-width: 700px) {
    margin: 0 4px;
    font-size: smaller;
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
            key={c}
            onClick={() => setSelectedCategory(c)}
            isActive={selectedCategory === c}
          >
            {c}
          </Item>
        ))}
      </CategoryList>
      <Photos category={selectedCategory} />
    </Layout>
  )
}

export default Photography
