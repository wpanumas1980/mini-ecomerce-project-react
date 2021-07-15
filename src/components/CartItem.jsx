import React from 'react';
import {
  Grid,
  Paper,
  Button,
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

export default function CartItem() {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.itemContainer}>
      <Grid container justify="space-between" style={{padding:'10px'}}>
        <Grid item>
          <Grid container>
            <Grid item className={classes.itemDetails}>
              <img
                width="150px"
                src={"https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                alt="foodImage"
              />
            </Grid>
            <Grid item className={classes.itemDetails}>
              <h5>Shushi</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid item >
          <h2>250</h2>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item>
          <Button
            size="large"
            startIcon={<DeleteIcon />}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
