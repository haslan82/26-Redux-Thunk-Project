//! Thunk aksiyonu

import api from "../../utils/api";
import ActionTypes from "../actionTypes"

export const getProducts = (restId) => (dispatch) => {
  
  //reducera yüklemenin başladığını bildirir
    dispatch({
    type: ActionTypes.PRODUCT_LOADİNG,
    
  })  
  api.get(`/products?restaurantId=${restId} `)
  // istek başarılı olursa reducera veri gönderilir
  .then((res)=> dispatch({
    type: ActionTypes.PRODUCT_SUCCESS,
    payload: res.data,
  }))
  
  .catch((err)=>dispatch({
    type: ActionTypes.PRODUCT_ERROR,
    payload: err.message,
  }));
};