import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  align-items: center;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
  border-radius: 50%;
`;
export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
