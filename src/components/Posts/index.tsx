import React, { useCallback, useState } from 'react';
import { CardProps } from '@/interfaces/card';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { Alert, Linking } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Card } from '../Card';
import redditStore from '../../store';

import {
  Container,
  PostsList
} from './styles';

interface PostsProps {
  category: 'new' | 'hot' | 'top' | 'rising';
};

export const Posts: React.FC<PostsProps> = ({ category }) => {
  const [data, setData] = useState([]);

  const theme = useTheme();
  
  useFocusEffect(
    useCallback(() => {
      async function getPosts() {
        redditStore.fetchPosts(category);
        setData(redditStore.posts);
      }
      getPosts();
    }, [category])
  );

  const renderCard = (item: CardProps) => {
    async function openLink() {
      try {
        if (await InAppBrowser.isAvailable()) {
          const result = await InAppBrowser.open(item.data.url, {
            dismissButtonStyle: 'close',
            preferredBarTintColor: theme.colors.background,
            preferredControlTintColor:  '#347EF2',
            readerMode: false,
            animated: true,
            modalEnabled: true,
            enableBarCollapsing: false,
          });

          if (result.type === 'dismiss' || result.type === 'cancel' || result.type === '') {
            return;
          }
        } else Linking.openURL(item.data.url);
      } catch (error: any) {
        Alert.alert(error.message);
      }
    }
    return (
      <Card
        data={item.data}
        key={item.data.id}
        onPress={() => openLink()}
      />
    );
  }

  return (
    <Container>
      <PostsList
        data={data}
        keyExtractor={item => String(item.data.id)}
        renderItem={({ item }) => renderCard(item)}
      />
    </Container>
  );
}