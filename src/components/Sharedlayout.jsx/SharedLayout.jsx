import { Nav, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <header>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </header>
  );
};
