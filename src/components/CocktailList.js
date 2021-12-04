import React from 'react';
import { useGlobalContext } from '../context';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Container, Typography } from '@material-ui/core';
import Loading from './Loading';
import Cocktail from './Cocktail';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    margin: 20,
    width: '70%',
    textAlign: 'center',
    letterSpacing: 1.6,
    textTransform: 'capitalize',
  },
  title: {
    margin: 30,
  },
}));

const CocktailList = () => {
  const classes = useStyles();
  const { cocktails, loading } = useGlobalContext();

  if (loading) return <Loading />;
  if (cocktails.length < 1) {
    return (
      <Container className={classes.container}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          className={classes.description}
        >
          no cocktails matched your search criteria!
        </Typography>
      </Container>
    );
  }

  return (
    <Container className={classes.container}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        className={classes.title}
      >
        Cocktails
      </Typography>
      <Grid container spacing={2}>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </Grid>
    </Container>
  );
};

export default CocktailList;
