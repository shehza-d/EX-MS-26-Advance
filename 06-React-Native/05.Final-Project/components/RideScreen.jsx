import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { setLocation } from "@/redux/reducers/locationSlice";
import { API_KEY } from "@/lib/constants";

// Image
import carIcon from "../assets/icons/car.png";
import motorbikeIcon from "../assets/icons/motorbike.png";
import rickshawIcon from "../assets/icons/rickshaw.png";

export default function RideBookingScreen() {
  const [destinationQuery, setDestinationQuery] = useState("");
  console.log(
    "🚀 ~ RideBookingScreen ~ setDestinationQuery:",
    destinationQuery
  );
  const [predictions, setPredictions] = useState([]);

  // dispatch for global state
  const dispatch = useDispatch();

  // icons
  const icons = [
    { id: "1", name: "Car", icon: carIcon },
    { id: "2", name: "Bike", icon: motorbikeIcon },
    { id: "3", name: "Rickshaw", icon: rickshawIcon },
  ];

  // fetch locations from https://app.gomaps.pro/

  const rideBooked = async (destinationQuery) => {
    console.log("🚀 ~ fetchAutocomplete ~ destinationQuery:", destinationQuery);
    try {
      const response = await fetch(
        `https://maps.gomaps.pro/maps/api/place/textsearch/json?query=${destinationQuery}&key=${API_KEY}`
      );
      const data = await response.json();

      setPredictions(data.results);
    } catch (error) {
      console.error("Error fetching autocomplete predictions:", error);
    }
  };

  // select destination
  const selectDestination = (item) => {
    console.log(item);
    dispatch(setLocation(item.geometry.location));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="DestinationQuery"
        value={destinationQuery}
        onChange={(e) => setDestinationQuery(e.nativeEvent.text)}
        onSubmitEditing={rideBooked}
        returnKeyType="search"
      />
      {predictions?.length > 0 && (
        <ScrollView style={styles.predictionsContainer}>
          {predictions.map((item) => (
            <TouchableOpacity
              key={item.place_id}
              onPress={() => selectDestination(item)}
            >
              <Text style={styles.predictionTitle}>{item.name}</Text>
              <Text style={styles.predictionDetails}>
                {item.formatted_address}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <View style={styles.iconSliderContainer}>
        <FlatList
          data={icons}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.iconContainer}>
              <Image source={item.icon} style={styles.iconImage} />
              <Text>{item.name}</Text>
            </View>
          )}
          style={styles.slider}
        />
      </View>
      <Button title="Book Ride" color={"#90D1CA"} onPress={rideBooked} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  predictionList: {
    maxHeight: 200,
  },
  predictionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  predictionDetails: {
    fontSize: 14,
    color: "gray",
  },
  iconSliderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    flexGrow: 0,
  },
  iconContainer: {
    alignItems: "center",
    marginRight: 10,
    width: 80,
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    margin: 10,
  },
});
