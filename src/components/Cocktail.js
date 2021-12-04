import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 245,
  },
  details: {
    marginTop: -20,
  },
  link: {
    textDecoration: 'none',
  },
});

const Cocktail = ({ image, name, id, info, glass }) => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="subtitle1" component="p" gutterBottom>
            {glass}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info}
          </Typography>
        </CardContent>
        <CardActions className={classes.details}>
          <NavLink to={`/cocktail/${id}`} className={classes.link}>
            <Button size="medium" color="secondary">
              Details
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Cocktail;
