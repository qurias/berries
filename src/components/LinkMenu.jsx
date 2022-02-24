import React from 'react'
import styled from 'styled-components'

const StyledLinkMenu = styled.li`
  margin: 0px 22px;
`

export const LinkMenu = (props) => {
  return <StyledLinkMenu>{props.children}</StyledLinkMenu>;
}
