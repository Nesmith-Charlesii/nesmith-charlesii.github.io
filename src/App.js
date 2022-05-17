import React from 'react';
import { Main } from './views/main';
import { createUseStyles } from 'react-jss';

const App = () => {
  const useStyles = createUseStyles({
    '@global': {
      body: {
        margin: "0px"
      }
    }
  })

  const classes = useStyles();

  return (
    <div className={classes['@global']}>
      <Main/>
    </div>
  );
}

export default App;
