import React from 'react';
import { Typography, ButtonBase, Paper } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  productContainer: {
    maxWidth: "250px",
    margin: '0 auto'
  },
  productFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 5px"
  },
  addToCart: {
    width: '50px',
    color: "#fff",
    borderRadius: "25px",
    background: "#EB7AAE",
    textAlign: "center"
  }
}));

export default function ProductItem({ productDetails }) {
  const classes = useStyles()

  return (
    <Paper elevation={6}
      className={classes.productContainer}
    >
      <img
        width="100%"
        height="120px"
        src={productDetails.imgUrl}
        alt="product"
        style={{ objectFit: "cover" }}
      />
      <Typography variant="h6" noWrap={true}>{productDetails.name}</Typography>
      <Typography variant="subtitle1" noWrap={true} style={{ padding: "0 5px" }}>
        {productDetails.description}
      </Typography>
      <div
        className={classes.productFooter}
      >
        <Typography variant="h5">{productDetails.price}</Typography>
        <ButtonBase
          className={classes.addToCart}
        >
          <ShoppingBasketIcon />
        </ButtonBase>
      </div>
    </Paper>
  )
}
