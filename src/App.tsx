import { Container, Typography } from '@mui/material';
import './App.css';
import { ErrorInfo } from './components/ErrorInfo';
import { Loader } from './components/Loader';
import { UsersTable } from './components/UsersTable';
import { useGetAllUsersQuery } from './store/services/userApi';

function App() {
  const { data: users, isLoading, isError } = useGetAllUsersQuery('users');

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorInfo />;
  }

  return (
    <main>
      <Container>
        <Typography
          align="center"
          variant="h3"
          color="secondary"
          component="h1"
        >
          Users table
        </Typography>
        {!users || users.length === 0 ? (
          <Typography
            align="center"
            variant="h6"
            color="secondary"
            component="h1"
          >
            Oops! There is no data on the server.
          </Typography>
        ) : (
          <UsersTable rows={users} />
        )}
      </Container>
    </main>
  );
}

export default App;
