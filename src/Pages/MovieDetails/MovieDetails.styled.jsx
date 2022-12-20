import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
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
export const Wrap = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 1.2em;
`;
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;
export const P = styled.p`
  font-size: 18px;
  letter-spacing: 0.6;
`;
export const Img = styled.img`
  object-fit: cover;
  border-radius: 1.2em;
  width: 300px;
`;
export const AdditionalDiv = styled.div`
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  border-radius: 1.2em;
`;
export const LinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
`;
export const LinkInfo = styled(NavLink)`
  background-color: #e9e8e8f5;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 25px;
  :hover {
    background-color: orange;
    color: #ffffff;
    transition: all 0.3s;
  }
  &.active {
    background-color: orange;
    box-shadow: 0 2px 4px orange;
  }
`;