import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Container className={classes.navbar}>
        <NavLink to="/" className={classes.link}>
          <LocalBarIcon fontSize="large" />
          <Typography variant="h6">TheCocktailDB</Typography>
        </NavLink>
        <List
          component="nav"
          aria-label="Cocktail-Links"
          className={classes.navList}
        >
          <ListItem button>
            <NavLink to="/" className={classes.link}>
              <Typography variant="h6">Home</Typography>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to="/about" className={classes.link}>
              <Typography variant="h6">About</Typography>
            </NavLink>
          </ListItem>
        </List>
      </Container>
    </AppBar>
  );
};

export default Navbar;
