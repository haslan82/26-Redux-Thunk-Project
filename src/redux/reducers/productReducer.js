
const initialState = {
    isLoading:false,
    error: false,
    products: [],
}


const  productReducer = (state = initialState, action) => {
    console.log(state)
    console.log(action);
    return state;
};


export default productReducer;