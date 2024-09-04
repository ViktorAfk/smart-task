import { Container, Typography } from '@mui/material';
import React from 'react';

export const ErrorInfo: React.FC = () => {
  return (
    <Container>
      <Typography
        color="warning"
        variant="h5"
        component={'h2'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100dvh',
        }}
      >
        Oops! Something went wrong! Please refresh the page.
      </Typography>
    </Container>
  );
};
