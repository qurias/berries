import React from 'react'
import styled from 'styled-components';
import Card from './Card'
import { StyledFlex } from '../styled';
import axios from 'axios';
import Basket from './Basket';

const StyledProducts = styled(StyledFlex)`
  margin: 0px 168px;
  padding-top: 40px;
`;

const StyledCards = styled(StyledFlex)`
  width: 80%;
`;

const Products = () => {

    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
      axios
        .get('http://localhost:3000/db.json')
        .then(({ data }) => {
          let arrProducts = Object.values(data.products);
          setProducts(arrProducts);
        });
    }, []);

    
  return (
    <StyledProducts>
      <StyledCards wrap="wrap" justify="space-between">
        {products && products.map((product) => {
          {
            console.log(product);
          }
          return (
            <Card product={product} />
          );
        })}
      </StyledCards>
      <Basket />
    </StyledProducts>
  );
}

export default Products;