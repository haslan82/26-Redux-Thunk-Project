import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
// console.log(state);
// console.log(action);
  switch (action.type) {


    case ActionTypes.PRODUCT_LOADING:
       // console.log("bu kısımda")
      return { ...state, isLoading: true };


    case ActionTypes.PRODUCT_ERROR:
       // console.log(action)
      return { ...state, isLoading: false, error: action.payload };


    case ActionTypes.PRODUCT_SUCCESS:
      return {...state, isLoading: false, error: false, products: action.payload };
    default: return state;
  }
};

export default productReducer;
