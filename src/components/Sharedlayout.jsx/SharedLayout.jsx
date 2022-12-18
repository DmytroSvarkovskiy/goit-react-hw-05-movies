import { Outlet } from 'react-router-dom';
import { Nav, Link, Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </header>
      <Outlet />
    </Container>
  );
};
