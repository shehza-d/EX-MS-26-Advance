import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import useLocation from "@/hooks/useLocation";

const markers = [
  {
    title: "Mazar-e-Quaid",
    description: "The tomb of Muhammad Ali Jinnah",
    latlng: { latitude: 24.8758, longitude: 67.0391 },
  },
  {
    title: "Clifton Beach",
    description: "Popular beach in Karachi",
    latlng: { latitude: 24.8048, longitude: 66.9762 },
  },
  {
    title: "Karachi University",
    description: "One of the largest universities in Pakistan",
    latlng: { latitude: 24.9426, longitude: 67.1193 },
  },
  {
    title: "Port Grand",
    description: "Food street and entertainment area",
    latlng: { latitude: 24.8572, longitude: 66.9905 },
  },
  {
    title: "Dolmen Mall Clifton",
    description: "Popular shopping mall",
    latlng: { latitude: 24.8138, longitude: 67.0304 },
  },
];

export default function App() {
  const { location } = useLocation();

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          showsTraffic={false}
          // showsBuildings={true}
          // showsIndoors={true}
          zoomEnabled={true}
          mapType="terrain"
          // onRegionChange={}
        >
          {markers.map((item) => (
            <Marker
              key={item.title}
              title={item.title}
              description={item.description}
              coordinate={{
                latitude: item.latlng.latitude,
                longitude: item.latlng.longitude,
              }}
            />
          ))}
        </MapView>
      ) : (
        <Text>Permission dedo</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
