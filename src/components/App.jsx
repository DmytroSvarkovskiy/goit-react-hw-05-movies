import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyled';
import { SharedLayout } from './Sharedlayout.jsx/SharedLayout';
import Home from '../Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
