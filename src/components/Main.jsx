import React from 'react'
import styled from 'styled-components'
import { StyledFlex } from '../styled';
import { Categories } from './Categories';
import Products from './Products';

const StyledMain = styled.main`
  width: 100%;
  position: relative;
`;

const StyledTitle = styled.h1`
  font-size: 69px;
  line-height: 75px;
  color: #8cc63f;
  width: 551px;
  text-align: center;
  margin-top: 293px;
  padding-bottom: 32px;
`;

const StyledMainWrapper = styled.div`
  background-image: url(/img/main/wrapper.png);
  height: 100%;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  top: -1.5%;
  left: 0%;
  z-index: -1;
`;

const StyledSubTitle = styled.h2`
  font-size: 48px;
  color: #2f4f3c;
  padding-top: 32px;
`;

const Main = () => {
  return (
    <StyledMain>
      <StyledMainWrapper />
      <StyledFlex align="center" direction="column">
        <StyledTitle>Замороженные ягоды в Израиле</StyledTitle>
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
        <StyledSubTitle>Доставка на дом</StyledSubTitle>
        <Categories />
        <Products />
      </StyledFlex>
    </StyledMain>
  );
};

export default Main;