export const initialState = {
  basket: [],
  totalPrice: 0,
  user: null,
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        totalPrice: state.totalPrice + action.item.price,
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id ${action.id}) as it's not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
        totalPrice: state.totalPrice - action.item.price,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
        totalPrice: initialState.totalPrice,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
