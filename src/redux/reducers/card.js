const initialState = {
  basket: new Map(),
  totalPrice: 0,
};

const card = (state = initialState, action) => {

  switch (action.type) {

    case 'ADD_PRODUCT_CARD':
      console.log(state.basket)
      if (state.basket.has(action.payload.id)) {

        let tempobj = state.basket.get(action.payload.id);

        tempobj.totalPriceItem =
          Math.trunc(tempobj.totalPriceItem) +
          Math.trunc(action.payload.price) * action.payload.amount +
          '.00';

        tempobj.totalAmount = tempobj.totalAmount + action.payload.amount;

        state.basket.set(action.payload.id, tempobj);

        state.totalPrice =
          state.totalPrice + (Math.trunc(action.payload.price) * action.payload.amount);
      } else {
        action.payload.totalPriceItem =
        action.payload.price * action.payload.amount + ".00";
        action.payload.totalAmount = action.payload.amount;
        state.basket.set(action.payload.id, action.payload);
        state.totalPrice =
          state.totalPrice +
          Math.trunc(action.payload.price) * action.payload.amount;
      }
      return {
        ...state
      };

    case 'DELETE_PRODUCT_CARD':
      state.totalPrice =
        state.totalPrice - state.basket.get(action.payload).totalPriceItem;
      
      state.basket.delete(action.payload);
    return {
      ...state
    }
    default:
      return state;
  }
};

export default card;
