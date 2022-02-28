import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLinkMenu = styled.li`
  margin: 0px 22px;
  cursor: pointer;
  color: white;
  font-weight: 700;
`;

const LinkMenu = (props) => {
  return (
    <Link to={props.href}>
      <StyledLinkMenu>{props.children}</StyledLinkMenu>
    </Link>
  );
}

export default LinkMenu;
