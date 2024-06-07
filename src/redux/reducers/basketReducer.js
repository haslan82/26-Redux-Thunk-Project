import ActionTypes from "../actionTypes";

const initialState = {
    isLoading:false,
    error:false,
    data: [],
}
const basketReducer = (state= initialState, action)=> {
  switch(action.type){

    case ActionTypes.CART_LOADING:
        return{...state, isLoading: true};

        case ActionTypes.CART_ERROR:
            return{
                ...state,
                 isLoading: false,
                  error:action.payload};

    case ActionTypes.CART_SUCCESS:
        return{
            ...state,
            isLoading: false, error: false, data:action.payload
        };

            case ActionTypes.ADD_TO_CART:
                return {...state,
                    error:false,
                     isLoading: false,
                      data: state.data.concat(action.payload)};
  }
return state;
}
export default basketReducer