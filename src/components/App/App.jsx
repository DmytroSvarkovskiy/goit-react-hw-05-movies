import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from '../GlobalStyled';
import { SharedLayout } from '../Sharedlayout.jsx/SharedLayout';
import Home from '../../Pages/Home/Home';

const Movies = lazy(() => import('Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('../Rewiews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

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
