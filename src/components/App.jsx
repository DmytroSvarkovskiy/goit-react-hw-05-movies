import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyled';
import { SharedLayout } from './Sharedlayout.jsx/SharedLayout';
import Home from '../Pages/Home/Home';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
