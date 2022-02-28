import React from 'react'
import styled from 'styled-components';
import Card from './Card'
import { StyledFlex } from '../styled';
import Basket from './Basket';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/products';

const StyledProducts = styled(StyledFlex)`
  margin: 0px 168px;
  padding-top: 40px;
`;

const StyledCards = styled(StyledFlex)`
  width: 80%;
`;

const Products = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector(({ products }) => products.items);

  return (
    <StyledProducts>
      <StyledCards wrap="wrap" justify="space-between">
        {products && products.map((product) => {
          return (
            <Card product={product} key={product.id}/>
          );
        })}
      </StyledCards>
      <Basket />
    </StyledProducts>
  );
}

export default Products;