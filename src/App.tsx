import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Router, Route, Switch } from 'react-router-dom';
import { theme } from './theme';
import { Main, List, About } from './routes';
import { Page } from './shared';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Router history={history}>
          <Switch>
            <Route component={Main} />
            <Route path="/list" exact component={List} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Router>
      </Page>
    </ThemeProvider>
  );
}

export default App;
