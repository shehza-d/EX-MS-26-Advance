import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { router } from "expo-router";
import { auth } from "@/lib/firebase";
import Map from "@/components/Map";
import RideScreen from "@/components/RideScreen";

export default function Index() {
  // agar login nhi tw login screen per redirect kardo
  // agar login tw user ki info console per print kardo
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("🚀 ~ onAuthStateChanged ~ user:", user);
      } else {
        router.replace("/login");
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Map />
      <RideScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  children: {
    flex: 1,
  },
});
