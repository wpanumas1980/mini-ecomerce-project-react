import React from 'react';
import {
  Grid,
  Paper,
  Button,
  TextField
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    marginBottom: "5px"
  },
  itemDetails: {
    padding: "0px 5px",
  },

}));

export default function CartItem({item}) {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.itemContainer}>
      <Grid container justify="space-between">
        <Grid item>
          <Grid container>
            <Grid item className={classes.itemDetails}>
              <img
                width="150px"
                src={item.imgUrl}
                alt="foodImage"
              />
            </Grid>
            <Grid item className={classes.itemDetails}>
              <h5>{item.name}</h5>
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

            </Grid>
          </Grid>
        </Grid>
        <Grid item >
          <h2>{item.price}</h2>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item>
          <Button
            size="large"
            startIcon={<DeleteIcon />}
            style={{ marginRight: 0 }}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
