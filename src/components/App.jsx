import { Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyled';
import { SharedLayout } from './Sharedlayout.jsx/SharedLayout';
export const App = () => {
  return (
    <div>
      <Routes>
        <SharedLayout />
        <GlobalStyle />
      </Routes>{' '}
    </div>
  );
};
