import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mater/core/Container';

export default function Change_password() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <p>Your password has been set.</p>
	    <p>Your may go ahead and 
		<Link href="#password_reset_form" variant="body2">
          sign in
        </Link>
		  now.
		</p>
      </div>
    </Container>
  );
}