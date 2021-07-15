import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  cartHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  cartBody: {
    display: "flex",
    justifyContent: "space-between"
  },
}));


export default function CartPage() {
  const classses = useStyles();
  const cart = useSelector(state => state.cart)
  console.log('cart: ', cart);
  return (
    <Container maxWidth="md"
    // style={{
    //   border: "1px solid blue"
    // }}
    >
      <div className={classses.cartHeader}>
        <h3>รายการอาหาร</h3>
        <h3>ราคา</h3>
      </div>
      {cart.length === 0 ? <p>ไม่มีสินค้าในตระกร้า</p> : cart.map(item => <CartItem item={item}/>)}
    </Container>
  )
}
