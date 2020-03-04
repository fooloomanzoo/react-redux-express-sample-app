import React from 'react';

import { useHistory } from 'react-router-dom';

import { Blink, Header, Text, Button } from '../shared';

type Props = {
  isLoading?: boolean;
};

const Nav: React.FunctionComponent<Props> = isLoading => {
  const history = useHistory();
  return (
    <nav>
      <Header>Navigate:&nbsp;</Header>
      <Button onClick={() => history.push('/')}>Main</Button>
      <Button onClick={() => history.push('/list')}>List</Button>
      <Button onClick={() => history.push('/about')}>About</Button>
      {isLoading && <Blink />}
    </nav>
  );
};

export default Nav;
