import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ProductItem from '../components/ProductItem';
import { products } from "../data/products";

export default function HomePage() {
  const [cart, setCart] = useState([]);
  console.log('cart: ', cart);
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} style={{ marginTop: '10px' }} justify="center" >
        {products.map(product =>
          <Grid item xs={12} sm={4} md={3} key={product.id}>
            <ProductItem productDetails={product} cart={cart} setCart={setCart} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
