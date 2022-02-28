import React from 'react'
import { StyledFlex } from '../styled';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteProductCard } from '../redux/actions/card';

const StyledTitle = styled.h1`
  margin-top: 30px;
`

const StyledItemsBasket = styled(StyledFlex)`
  padding: 30px;
  border: 2px solid #8cc63f;
  width: 70%;
`;

const StyledItem = styled.div`
  width: calc(100% / 4);
  margin-top: 20px;
`

const Basket = () => {

  const dispatch = useDispatch();

  const items = useSelector((data) => data.card)

  let arrItemsBasket = [];

  items.basket.forEach((key) => {
    arrItemsBasket.push(key);
  });

  const handleDeleteIcon = (id) => {
    dispatch(deleteProductCard(id));
  };

  return (
    <StyledFlex align="center" direction="column">
      <StyledTitle>Корзина</StyledTitle>
      <StyledItemsBasket justify="flex-start" wrap="wrap">
        {!!arrItemsBasket.length &&
          arrItemsBasket.map((obj) => {
            return (
              <StyledItem>
                <img src={`./${obj.imageUrl}`} />
                <p>{obj.name}</p>
                Сумма: <p>{obj.totalPriceItem}</p>
                Количество: <p>{obj.totalAmount}</p>
                <button onClick={() => handleDeleteIcon(obj.id)}>
                  Удалить
                </button>
              </StyledItem>
            );
          })}
      </StyledItemsBasket>
    </StyledFlex>
  );
}

export default Basket