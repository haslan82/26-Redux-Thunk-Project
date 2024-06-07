import React from 'react'
import Container from "../components/Container";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loader from '../components/Loader';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((store) => store.cart);
console.log(cart);

  return (
    <Container>
<h1>SEPET</h1>
<div>
  {
    cart.isLoading ? (
      <Loader />
    ) : Cart.error ? (<Error />) : cart.data.lenght === 0 ? (
      <p>Sepette herhangi bir ürün yok
        <Link to={"/"} >
        Ürün Ekle
        </Link>
      </p>
    ): (
      cart.data.map((item)=> <CartItem  key={item.id} item={item} /> )
    )
  }
</div>
    </Container>
  )
}

export default Cart

