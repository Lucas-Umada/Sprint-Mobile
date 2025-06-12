import styled from 'styled-components/native';


export const HeaderContainer = styled.View`
  width: 100%;
  height: 250px;
  background-color: #3A3A3C;
  justify-content: start;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-bottom-width: 3px;
  border-radius: 0 0 25px 25px;
  border-color: #C28800;
`;

export const HeaderTitle = styled.Text`
    font-family: 'ditact gothic';
    font-size: 36px;
    color: #FFD700;
`

export const HeaderSubtitle = styled.Text`
    font-family: 'didact gothic';
    font-size: 12px;
    color: #C1C1C1;
    margin-top: 8px;
`;

