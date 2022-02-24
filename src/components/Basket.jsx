import React from 'react'
import styled, { css } from 'styled-components';
import { StyledFlex } from '../styled'

const StyledBasket = styled(StyledFlex)`
  padding: 24px;
  border: 2px solid #8cc63f;
  border-radius: 24px;
  width: 20%;
  height: min-content;

  & > svg {
    width: 100%;
  }

`;

const StyledBasketTitle = styled.p`
  font-size: 26px;
  text-align: center;
`;

const StyledBasketItems = styled(StyledFlex)`
  margin: 8px 0px 24px 0px;
`;
const StyledBasketItem = styled(StyledFlex)`
  margin-left: 50px;
  margin-top: 16px;
  position: relative;

  &:before {
    content: url(img/main/basket/trash-can.png);
    position: absolute;
    left: -18%;
    top: 0%;
  }
`;

const StyledBasketName = styled(StyledFlex)`
  line-height: 21px;
`;

const StyledBasketAmount = styled(StyledFlex)`
  margin-top: 8px;
`;

const StyledBasketInfo = styled(StyledFlex)`
  margin-top: 20px;
`;

const StyledBasketTotal = styled.p`

`
const StyledBasketSum = styled.p``;

const StyledBasketButton = styled.button`
  border-radius: 16px;
  width: 114px;
  height: 49px;
  border: none;
  margin-top: 20px;
`;

const StyledBasketButtonBuy = styled(StyledBasketButton)`
  background: #8cc63f;
  color: white;
`;

const StyledBasketButtonBasket = styled(StyledBasketButton)`
  border: 1px solid black;
`;

const Basket = () => {
  return (
    <StyledBasket direction="column">
      <StyledBasketTitle>Корзина</StyledBasketTitle>
      <StyledBasketItems direction="column">
        <StyledBasketItem direction="column">
          <StyledBasketName>Свекла + витамин В12 Замороженная</StyledBasketName>
          <StyledBasketAmount>2 x 26.00₪</StyledBasketAmount>
        </StyledBasketItem>
        <StyledBasketItem direction="column">
          <StyledBasketName>Свекла + витамин В12 Замороженная</StyledBasketName>
          <StyledBasketAmount>2 x 26.00₪</StyledBasketAmount>
        </StyledBasketItem>
        <StyledBasketItem direction="column">
          <StyledBasketName>Свекла + витамин В12 Замороженная</StyledBasketName>
          <StyledBasketAmount>2 x 26.00₪</StyledBasketAmount>
        </StyledBasketItem>
      </StyledBasketItems>
      <svg
        width="273"
        height="10"
        viewBox="0 0 273 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.999988 7.48114C5.62202 5.16231 7.76852 1 15.4928 1C26.1862 1 26.1862 8.99998 36.8873 8.99998C47.5885 8.99998 47.5885 1 58.2819 1.00001C68.9752 1.00001 68.9752 8.99998 79.6764 8.99998C90.3697 8.99998 90.3697 1.00001 101.071 1.00001C111.772 1.00001 111.772 8.99999 122.465 8.99999C133.159 8.99999 133.159 1.00001 143.86 1.00001C154.561 1.00001 154.561 8.99999 165.255 8.99999C175.948 8.99999 175.948 1.00002 186.649 1.00002C197.342 1.00002 197.342 8.99999 208.036 8.99999C218.729 9 218.729 1.00002 229.43 1.00002C240.124 1.00002 240.124 9 250.825 9C261.448 9 261.518 1.11597 272 1.01162"
          stroke="#8CC63F"
          strokeWidth="2"
        />
      </svg>
      <StyledBasketInfo justify="space-between">
        <StyledBasketTotal>Подытог:</StyledBasketTotal>
        <StyledBasketSum>184.00₪</StyledBasketSum>
      </StyledBasketInfo>
      <StyledFlex justify="space-between">
        <StyledBasketButtonBuy>Оплатить</StyledBasketButtonBuy>
        <StyledBasketButtonBasket>Корзина</StyledBasketButtonBasket>
      </StyledFlex>
    </StyledBasket>
  );
}

export default Basket