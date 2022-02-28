import React from 'react'
import styled from 'styled-components';
import { StyledFlex } from '../styled';
import LinkMenu  from './LinkMenu';

const linksMenu = [
  { name: 'Все продукты', href: '/' },
  { name: 'Рецепты', href: '/recipes' },
  { name: 'Доставка', href: '/delivery' },
  { name: 'Оплата', href: '/payment' },
  { name: 'Корзина', href: '/basket' },
];

const StyledUl = styled.ul`
  display: flex;
  color: #ffffff;
  font-size: 18px;
  align-items: center;
`;

const StyledHeader = styled.header`
  width: 100%;
  background: #8cc63f;
  height: 114px;
`;

const StyledLogo = styled.div`
  width: 112px;
  height: 112px;
  margin: 0px 26px 0px 28px;
  position: relative;

  &:before {
    content: url('/img/header/logo.png');
    position: absolute;
    top: 24%;
    width: 100%;
    height: 100%;
  }
`;

const Header = () => {
  return (
    <StyledHeader >
      <StyledFlex justify="center">
        <StyledUl>
          <li>Иврит</li>
          {linksMenu.map((elem, index) => {
            return index === 2 ? (
              <>
                <StyledLogo alt="Logo" />
                <LinkMenu href={elem.href} key={index}>
                  {elem.name}
                </LinkMenu>
              </>
            ) : (
              <LinkMenu href={elem.href} key={index}>
                {elem.name}
              </LinkMenu>
            );
          })}
        </StyledUl>
      </StyledFlex>
    </StyledHeader>
  );
}

export default Header