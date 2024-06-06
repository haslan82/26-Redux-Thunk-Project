import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {  getProducts } from "../redux/actions/productAction";
import { getRestaurants } from '../redux/actions/restaurantAction';




const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // İki farklı reducera abone olma
  const productState = useSelector((store) => store.products);

  const { error, isLoading, restaurants } = useSelector(
    (store) => store.restaurants
  );

  useEffect(() => {
    dispatch(getProducts(id));
    dispatch(getRestaurants(id));
  }, []);
  return (
    <div>
      restaurant
    </div>
  )
}

export default Restaurant

