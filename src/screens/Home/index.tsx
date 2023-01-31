import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'styled-components';
import { useObserver } from 'mobx-react';

import {
  Container,
  Header,
} from './styles';

import Logo from '../../assets/reddit.svg';
import { Posts } from '../../components/Posts';

const Tab = createMaterialTopTabNavigator();

export const Home = () => {
  const theme = useTheme();

  const renderDynamicTabs = () => {
    return useObserver(() => (
      <Tab.Navigator
        initialRouteName="new"
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.main,
          },
        }}
      >
        <Tab.Screen name="new">{() => <Posts category='new' />}</Tab.Screen>
        <Tab.Screen name="hot">{() => <Posts category='hot' />}</Tab.Screen>
        <Tab.Screen name="top">{() => <Posts category='top' />}</Tab.Screen>
        <Tab.Screen name="popular">{() => <Posts category='rising' />}</Tab.Screen>
      </Tab.Navigator>
    ));
  };

  return (
    <Container>
      <Header>
        <Logo width={120} height={50} />
      </Header>

      <>
        {renderDynamicTabs()}
      </>
    </Container>
  );
}