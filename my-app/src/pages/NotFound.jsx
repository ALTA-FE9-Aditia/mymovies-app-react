import React from 'react';
import Container from 'components/Container';
import { useTitle } from 'utils/hooks/useTitle';
function NotFound() {
  useTitle('404 Not found :(');
  return (
    <Container>
      <p>You lost,or sum?</p>
    </Container>
  );
}

export default NotFound;
