import React from 'react'
import styled from 'styled-components'
import { StyledFlex } from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import { addProductCard } from '../redux/actions/card';

const StyledCard = styled(StyledFlex)`
  padding: 24px;
  margin-top: 32px;
  width: 296px;
`

const StyledCardName = styled.p`
  font-size: 26px;
  width: 248px;
  color: #2f4f3c;
  text-align: center;
  height: 84px;
  font-family: 'Orelega One', cursive;
  font-weight: 400;
`;

const StyledCardImage = styled.img`
  width: 248px;
  height: 171px;
  margin-top: 22px;
`;

const StyledCardPrice = styled.p`
  font-size: 22px;
  color: #006837;
  font-weight: 400;
`;
const StyledCardOldPrice = styled.div`
  font-size: 18px;
  margin-left: 15px;
  position: relative;
  font-weight: 400;

  &:before {
    content: '';
    width: 100%;
    height: 4px;
    padding: 0px 5px;
    left: -5px;
    top: 35%;
    opacity: 0.8;
    position: absolute;
    background: #f47676;
    border-radius: 15px;
  }
`;

const StyledCardText = styled.p`
  font-size: 18px;
  margin-left: 12px;
  font-weight: 400;
`;

const StyledButton = styled.button`
  border-radius: 16px;
  padding: 12px 16px;
  border: 1px solid #343434;
  display: flex;
  font-weight: 400;

  & > div {
    padding: 0px 10px;
    font-size: 18px;
    font-weight: 400;
  }
`;

const StyledButtonBasket = styled.button`
  padding: 12px 8px;
  background: #2f4f3c;
  border: none;
  border-radius: 16px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 700;
`;

const StyledInfo = styled(StyledFlex)`
  padding-top: 22px;
`;

const StyledButtons = styled(StyledFlex)`
  padding-top: 22px;
`

const StyledButtonAmount = styled.button`
  border: none;
  cursor: pointer;
  padding: 0px 7px;
  font-size: 18px;
`

const Card = (props) => {

  const dispatch = useDispatch();

  const [amount, setAmount] = React.useState(1);

  const increaseAmount = () => {
    setAmount(amount => amount + 1)
  }

  const decreaseAmount = () => {
    if(amount !== 1) {
      setAmount((amount) => amount - 1);
    }
  }

  const products = useSelector(({ products }) => products.items);

  const addCardInBasket = () => {
    products[props.product.id].amount = amount
    dispatch(addProductCard(products[props.product.id]));
  }

  return (
    <StyledCard direction="column">
      <StyledCardName>{props.product.name}</StyledCardName>
      <StyledFlex direction="column">
        <StyledCardImage {...props} src={props.product.imageUrl} />
        <StyledInfo align="flex-end" justify="center">
          <StyledCardPrice>{props.product.price}₪</StyledCardPrice>
          {props.product.hasOwnProperty('oldprice') ? (
            <StyledCardOldPrice>{props.product.oldprice}₪</StyledCardOldPrice>
          ) : (
            ''
          )}
          <StyledCardText>за 2.5 кг</StyledCardText>
        </StyledInfo>
      </StyledFlex>
      <StyledButtons justify="space-evenly">
        <StyledButton>
          <StyledButtonAmount onClick={decreaseAmount}>-</StyledButtonAmount>
          <div>{amount}</div>
          <StyledButtonAmount onClick={increaseAmount}>+</StyledButtonAmount>
        </StyledButton>
        <StyledButtonBasket onClick={addCardInBasket}>
          В корзину
        </StyledButtonBasket>
      </StyledButtons>
    </StyledCard>
  );
}

export default Card