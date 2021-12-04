import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <Typography variant="h3" component="h1" gutterBottom>
        Home
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        gutterBottom
        className={classes.description}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga minima
        explicabo officiis ipsum nemo labore exercitationem, nulla ducimus ipsa
        doloribus ullam est modi reiciendis velit fugit aliquid dolore deleniti
        tempora architecto ea consectetur, optio ut in rem. Magnam molestias,
        est non neque molestiae corporis corrupti quia, iusto esse ratione
        nihil! Similique, dolores? Praesentium dolore natus cumque, veniam
        deleniti accusantium consequuntur numquam, unde voluptatibus maiores
        molestias, hic exercitationem. Explicabo suscipit repudiandae,
        reprehenderit illum labore quibusdam cumque quis minus eius, animi eos.
      </Typography>
    </section>
  );
};

export default About;
