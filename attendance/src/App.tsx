// App.tsx

import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/layout/Header';
import AttendancePage from './pages/AttendancePage';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <AttendancePage />
      </Container>
    </>
  );
}

export default App;
