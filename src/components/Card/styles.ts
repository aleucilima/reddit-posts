import styled from 'styled-components/native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 5px;
  margin-bottom: 8px;
  
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  width: 100px;
  height: 100px;
  
  margin-right: 20px;
`;

export const Img = styled(Image)`
  width: 100px;
  height: 100px;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Author = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TotalVotes = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 4px;
`;

export const Details = styled.View`
  flex-direction: row;
  padding-right: 10px;
`;

export const SectionAuthor = styled.View`
  width: 110px;
`;

export const SectionItems = styled.View`
  width: 100px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Item = styled.View`
  flex-direction: row;
  margin-right: 4px;
`;

export const Icons = styled(Icon)`
  font-size: 16px;
`;

export const Commits = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 4px;
`;

export const CreatedAt = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: right;
  margin-right: 10px;
`;
