import React, { useContext, Fragment } from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';

const App = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>CybertronScript</h1>
          <p>For Cybertron!</p>
        </div>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/faves'>
            favourite
            <span className='Badge'>{state.favorites.length}</span>
          </Link>
        </div>
      </header>
      {children}
    </Fragment>
  );
};

export default App;
