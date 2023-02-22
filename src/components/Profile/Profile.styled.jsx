import styled from 'styled-components';

export const ProfCard = styled.div`
  width: 50%;
  margin: 0 auto 20px;
`;

export const UserThumb = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;
  color: #6b9888;
  font-size: 22px;
`;

export const Location = styled.p`
  margin-bottom: 20px;
  color: #6b6b6b;
  font-size: 22px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  text-align: center;
  list-style: none;
`;

export const StatListItem = styled.li`
  width: 100%;
  height: 100%;
`;

export const StatLabel = styled.span`
  display: block;
  margin-bottom: 5px;
  color: #6b9888;
`;

export const StatValue = styled.span`
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #4a6058;
`;
