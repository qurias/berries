import axios from 'axios'

export const fetchProducts = () => (dispatch) => {
  axios.get('http://localhost:3000/db.json').then(({ data }) => {
    let arrProducts = Object.values(data.products);
    dispatch(setProductsItems(arrProducts));
  });
};

export const setProductsItems = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});