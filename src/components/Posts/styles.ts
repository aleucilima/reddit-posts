import { CardProps } from '@/interfaces/card';
import { FlatList, FlatListProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 8px 16px;
`;

export const PostsList = styled(
  FlatList as new (props: FlatListProps<CardProps>) => FlatList<CardProps>
  ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: getBottomSpace() }
  })`
`;