import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CartItem from '../components/CartItem';
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

  return (
    <Container maxWidth="md">
      <div className={classses.cartHeader}>
        <h3>รายการอาหาร</h3>
        <h3>ราคา</h3>
      </div>
   {/* <p>ไม่มีสินค้าในตระกร้า</p>  */}
   <CartItem />
    </Container>
  )
}
