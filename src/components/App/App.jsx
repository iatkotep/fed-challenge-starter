import React from 'react';
import ClassCards from '../ClassCards/ClassCards';

import { ClassesProvider } from './hooks/ClassesContext';
import { Container } from './ui';
import { classes } from './mock';

function App() {
  return (

    <Container>
      <ClassesProvider>
        <ClassCards {...{classes}} />
      </ClassesProvider>
    </Container>
  );
}

export default App;
