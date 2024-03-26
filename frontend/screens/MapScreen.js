import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import uuid from 'react-native-uuid'; 

MapboxGL.setAccessToken('pk.eyJ1IjoiY2hlY2hvLXJiIiwiYSI6ImNsdHZqNHFpcjFnejkyaW9idzNmb3V3ZGMifQ.1gu00fJufItmUovg4iG_IQ');

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  buttonText: {
    color: '#000',
  },
});

function MapScreen() {
  const [waypoints, setWaypoints] = useState([]);

  const onMapPress = useCallback((e) => {
    const newWaypoint = {
      id: uuid.v4(), // Unique identifier for each waypoint
      coordinates: e.geometry.coordinates,
    };
    setWaypoints([...waypoints, newWaypoint]);
  }, [waypoints]);

  const downloadMapForOfflineUse = useCallback(() => {
    // Placeholder function for triggering map download
    Alert.alert('Download', 'Map download will start.');
  }, []);

  return (
    <View style={styles.mapContainer}>
      <MapboxGL.MapView style={styles.map} onPress={onMapPress}>
        <MapboxGL.Camera
          zoomLevel={10}
          centerCoordinate={[0, 0]}
        />
        <MapboxGL.UserLocation />
        {waypoints.map(waypoint => (
          <MapboxGL.PointAnnotation
            key={waypoint.id}
            id={waypoint.id}
            coordinate={waypoint.coordinates}
          />
        ))}
      </MapboxGL.MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={downloadMapForOfflineUse}>
          <Text style={styles.buttonText}>Download Map for Offline Use</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MapScreen;
