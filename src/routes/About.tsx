import React from 'react';

import { Page, Blink, Box, Container, Header, Spinner, Text } from '../shared';

type Props = {
  isLoading?: boolean;
};

const About: React.FunctionComponent<Props> = isLoading => {
  return (
    <Container>
      <Header>About</Header>
      <Text>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </li>
          <li>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </li>
          <li>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </li>
        </ul>
      </Text>
    </Container>
  );
};

export default About;
