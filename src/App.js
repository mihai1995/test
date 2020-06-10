import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import Header from './components/Menu';

import { useSelector } from 'react-redux';

function App(props) {
  const { mode } = useSelector((state) => state.books);

  const route = useRoutes();

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <h3>Digital home library</h3>
      <Router>
        <Header />
        {route}
      </Router>
    </ThemeProvider>
  );
}

export default App;
