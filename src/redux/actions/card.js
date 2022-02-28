export const addProductCard = (product) => ({
  type: 'ADD_PRODUCT_CARD',
  payload: product,
});

export const deleteProductCard = (id) => ({
  type: 'DELETE_PRODUCT_CARD',
  payload: id,
});

