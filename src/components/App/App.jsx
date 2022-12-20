import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyled';
import { SharedLayout } from '../Sharedlayout.jsx/SharedLayout';
import Home from '../../Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Reviews from '../Rewiews/Reviews';
import Cast from 'components/Cast/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
