
import React from 'react'
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/Routes'

export default function  app() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#1C1C1C' barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}