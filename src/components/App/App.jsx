import React from 'react';
import ClassCards from '../ClassCards/ClassCards';

import { useStateManager } from './hooks/useStateManager';
import { Container } from './ui';
import { classes } from './mock';

function App() {
  const {selectedClassIndeces, toggleSelectedClass} = useStateManager();

  return (
    <Container>
      <ClassCards {...{classes}} />
    </Container>
  );
}

export default App;
