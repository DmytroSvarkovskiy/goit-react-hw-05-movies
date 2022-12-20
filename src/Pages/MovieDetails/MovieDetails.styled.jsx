import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
export const Arrow = styled(BiArrowBack)`
  margin-right: 5px;
`;
export const Button = styled.button`
  display: flex;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  height: 25px;
  width: 85px;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: orange;
    svg {
      transition: all 0.3s;

      color: red;
    }
    color: #ffffff;
    transition: all 0.3s;
  }
  margin-bottom: 15px;
`;
