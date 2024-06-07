import { v4  } from 'uuid';
import api from "../../utils/api";
import ActionTypes from '../actionTypes';



// sepetteki elemanları al
export const getCart = ()=> (dispatch)=>{
    dispatch({
        type:ActionTypes.CART_LOADING,
    })
    api.get("/cart").then((res)=>dispatch({
        type:ActionTypes.CART_SUCCESS,
        payload:res.data,
    } )
).catch((err)=> {
    dispatch({
        type:ActionTypes.CART_ERROR,
        payload:err.message,
    })
})
}

// sepete yeni eleman ekleme
export const addToBasket = (product, rest) => (dispatch)=> {


    // 1. adım Sepete eklenecek olan ürünün bilgilerini belirle
    const newItem = {
id: v4 (),
title:product.title,
price:product.price,
photo:product.photo,
restaurantName:rest.name
amount: 1,
    }
// 2. adım elemanı api ye ekle
api.post(`/cart`, newItem).then(()=>dispatch({
    type:ActionTypes.ADD_TO_CART,
    payload:newItem,
} ))

}
