import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from './pages/Books';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Books />
      </Route>
    </Switch>
  );
};
