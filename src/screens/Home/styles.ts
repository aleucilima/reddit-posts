import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


interface ContentProps {
  category: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: ${getStatusBarHeight() + 24}px 24px 10px;
`;

