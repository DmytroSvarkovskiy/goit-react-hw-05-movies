import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  font-size: 30px;
  font-weight: 600;
  height: 60px;
  display: flex;
  gap: 35px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;
export const Link = styled(NavLink)`
  &.active {
    color: red;
  }
  padding: 10px;
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding: 0 15px;
`;
