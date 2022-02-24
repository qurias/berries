import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  color: #FFFFFF;
  background: #8CC63F;
  padding: 74px 0px 60px 0px;
  margin-top: 90px;
`;

const StyledFooterUl = styled.ul`
  display: flex;
  margin: 0px 419px;
  justify-content: space-between;
`;

const StyledFooterLi = styled.li`
  display: flex;
  margin-top: 20px;
`;



const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterUl>
        <li>
          <ul>
            <StyledFooterLi>ДЛЯ КЛИЕНТОВ</StyledFooterLi>
            <StyledFooterLi>Доставка и города</StyledFooterLi>
            <StyledFooterLi>Доставка и города</StyledFooterLi>
          </ul>
        </li>
        <li>
          <ul>
            <StyledFooterLi>О ПРОДУКЦИИ</StyledFooterLi>
            <StyledFooterLi>Фото продукции</StyledFooterLi>
            <StyledFooterLi>Вопросы и ответы</StyledFooterLi>
          </ul>
        </li>
        <li>
          <ul>
            <StyledFooterLi>КОНТАКТЫ</StyledFooterLi>
            <StyledFooterLi>info@berryland.co.il</StyledFooterLi>
            <StyledFooterLi>055-9116577</StyledFooterLi>
          </ul>
        </li>
        <li>
          <ul>
            <StyledFooterLi>ЧАСЫ РАБОТЫ</StyledFooterLi>
            <StyledFooterLi>вс – чт 10:00 – 18:00</StyledFooterLi>
            <StyledFooterLi>пт 10:00 – 13:00</StyledFooterLi>
          </ul>
        </li>
      </StyledFooterUl>
    </StyledFooter>
  );
}

export default Footer;