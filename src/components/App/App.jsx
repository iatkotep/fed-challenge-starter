import React from 'react';
import { Container } from './ui';
import { useStateManager } from './hooks/useStateManager';
function App() {
  const {selectedClassIndeces, toggleSelectedClass} = useStateManager();

  return (
    <Container>

    </Container>
  );
}

export default App;
