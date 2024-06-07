import React from 'react'
import Container from "../components/Container";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((store) => store.cart);
//console.log(cart);

  return (
    <Container>
<h1>SEPET</h1>
<div>
  <Link>Ürün Ekle</Link>
</div>
    </Container>
  )
}

export default Cart

