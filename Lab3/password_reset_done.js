import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mater/core/Container';

export default function Change_password() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Check your inbox
        </Typography>
        <p>We've emailed you instructions for setting your password, if an account exists with the email you entered.</p>
	    <p>If you dont receive an email, please make sure you have entered the address you registered with, and check your spam folder.</p>
      </div>
    </Container>
  );
}