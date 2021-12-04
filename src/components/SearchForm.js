import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalContext } from '../context';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontSize: 22,
    textTransform: 'capitalize',
  },
});

const SearchForm = () => {
  const classes = useStyles();
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  const searchCocktail = () => {
    const searchInput = searchValue.current.children[0].value;
    setSearchTerm(searchInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  React.useEffect(() => {
    searchValue.current.children[0].focus();
  }, []);

  return (
    <Container className={classes.container}>
      <FormControl>
        <form onSubmit={handleSubmit}>
          <InputLabel className={classes.text}>cocktails list</InputLabel>
          <Input
            className={classes.text}
            ref={searchValue}
            onChange={searchCocktail}
          />
          <FormHelperText className={classes.text}>
            search for your favorite cocktail
          </FormHelperText>
        </form>
      </FormControl>
    </Container>
  );
};

export default SearchForm;
