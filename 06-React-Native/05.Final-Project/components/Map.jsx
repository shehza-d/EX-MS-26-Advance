import { useEffect, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useSelector } from "react-redux";
import { decodePolyline } from "@/lib/decodePolyline";
import { useLocation } from "@/hooks/useLocation";
import { API_KEY } from "@/lib/constants";

export default function Map() {
  const { location } = useLocation();

  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [encodedPolyline, setEncodedPolyline] = useState(null);
  const [distance, setDistance] = useState(null);

  // get data from redux
  const destinationLocation = useSelector((state) => state.location.location);

  // get direction
  const getDirection = async () => {
    // we are sending our own location to API
    const origin = `${location.coords.latitude},${location.coords.longitude}`;

    // jidher jana hy
    const destination = `${destinationLocation.lat},${destinationLocation.lng}`;

    const url = `https://maps.gomaps.pro/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const rasta = await response.json();

      setDistance(rasta.routes[0].legs[0]);

      if (rasta.routes.length) {
        setEncodedPolyline(rasta.routes[0].overview_polyline.points);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        {distance?.distance?.text} {distance?.duration?.text}
      </Text>
      {errorMsg && <Text>{errorMsg}</Text>}
      {loading && <ActivityIndicator size="large" color="#90D1CA" />}
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {destinationLocation && (
            <View>
              <Marker
                coordinate={{
                  latitude: destinationLocation.lat,
                  longitude: destinationLocation.lng,
                }}
                title={"destination location"}
                description={"hello world"}
              />
            </View>
          )}
          {encodedPolyline && (
            <View>
              {/* direction ky path ki lines hyn ye */}
              <Polyline
                coordinates={decodePolyline(encodedPolyline)}
                strokeColor="#90D1CA" // black color
                strokeWidth={6}
              />
            </View>
          )}
        </MapView>
      ) : (
        <Text>Permission required</Text>
      )}

      <Button
        onPress={getDirection}
        title="Get Direction"
        color="#90D1CA"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "80%",
  },
});
