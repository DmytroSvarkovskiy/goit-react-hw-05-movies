import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;
export const Link = styled(NavLink)`
  &.active {
    color: red;
  }
`;
