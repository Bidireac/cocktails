import React from 'react';
import Loading from '../components/Loading';
import { makeStyles } from '@material-ui/core/styles';
import { useParams, NavLink } from 'react-router-dom';
import { Box, Button, Chip, Grid, Paper, Typography } from '@material-ui/core';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

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
  link: {
    textDecoration: 'none',
    letterSpacing: 2,
    margin: 10,
  },
  paper: {
    width: '90%',
    height: '90%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 3,
  },
  info: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    margin: 0,
    padding: 0,
    marginLeft: 10,
  },
}));

const SingleCocktail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
          setLoading(false);
        } else {
          setCocktail(null);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) return <Loading />;
  if (!cocktail)
    return (
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        className={classes.description}
      />
    );

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;
  return (
    <Box className={classes.container}>
      <NavLink to="/" className={classes.link}>
        <Button size="large" variant="contained" color="secondary">
          back home
        </Button>
      </NavLink>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        className={classes.description}
      >
        {name}
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Paper elevation={3} variant="outlined" className={classes.paper}>
            <img src={image} alt={name} className={classes.image} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.info}>
            <Chip label="Name" color="secondary" />
            <Typography
              variant="subtitle1"
              component="p"
              gutterBottom
              className={classes.text}
            >
              {name}
            </Typography>
          </Box>
          <Box className={classes.info}>
            <Chip label="Category" color="secondary" />
            <Typography
              variant="subtitle1"
              component="p"
              gutterBottom
              className={classes.text}
            >
              {category}
            </Typography>
          </Box>
          <Box className={classes.info}>
            <Chip label="Info" color="secondary" />
            <Typography
              variant="subtitle1"
              component="p"
              gutterBottom
              className={classes.text}
            >
              {info}
            </Typography>
          </Box>
          <Box className={classes.info}>
            <Chip label="Glass" color="secondary" />
            <Typography
              variant="subtitle1"
              component="p"
              gutterBottom
              className={classes.text}
            >
              {glass}
            </Typography>
          </Box>
          <Box className={classes.info}>
            <Chip label="Instructions" color="secondary" />
            <Typography
              variant="subtitle1"
              component="p"
              gutterBottom
              className={classes.text}
            >
              {instructions}
            </Typography>
          </Box>
          <Box className={classes.info}>
            <Chip label="Ingredients" color="secondary" />
            {ingredients.map((item, index) => {
              return item ? (
                <Typography
                  key={index}
                  variant="subtitle1"
                  component="p"
                  gutterBottom
                  className={classes.text}
                >
                  {item},
                </Typography>
              ) : null;
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleCocktail;
