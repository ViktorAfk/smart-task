import { CircularProgress, Container } from '@mui/material';
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100dvh',
      }}
    >
      <CircularProgress />
    </Container>
  );
};
