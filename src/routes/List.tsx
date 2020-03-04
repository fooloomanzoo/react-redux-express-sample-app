import React from 'react';

import { Page, Blink, Box, Container, Header, Spinner, Text } from '../shared';

type Props = {
  isLoading?: boolean;
}

const List: React.FunctionComponent<Props> = isLoading => {
  return (
      <Container>
        <Box>
          <Blink />
        </Box>
      </Container>
  );
};

export default List;
