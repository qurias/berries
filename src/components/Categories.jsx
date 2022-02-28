import React from 'react'
import styled from 'styled-components';

const StyledLi = styled.li`
  font-size: 18px;
  color: #2f4f3c;
  margin: 0px 22px;
  cursor: pointer;
  font-weight: 600;
`;

const StyledUl = styled.ul`
  display: flex;
  margin-top: 60px;
`;

const categories = ['Все продукты', 'Ягоды', 'Суперфуд'];

const Categories = () => {
  return (
    <div>
      <StyledUl>
        {categories.map((elem,index) => {
          return <StyledLi key={index}>{elem}</StyledLi>;
        })}
      </StyledUl>
    </div>
  );
}

export default Categories;
