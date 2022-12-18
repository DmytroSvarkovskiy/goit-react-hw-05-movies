import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const FilmList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const LinkItem = styled(Link)`
  :hover {
    color: red;
  }
`;
export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 25px;
`;
export const Wrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
`;
