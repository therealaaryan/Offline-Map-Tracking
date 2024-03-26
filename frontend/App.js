import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoiY2hlY2hvLXJiIiwiYSI6ImNsdHZqNHFpcjFnejkyaW9idzNmb3V3ZGMifQ.1gu00fJufItmUovg4iG_IQ');

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
