import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { router } from "expo-router";
import { auth } from "@/lib/firebase";
import Map from "@/components/Map";
import RideScreen from "@/components/RideScreen";

export default function Index() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
        router.push("/login");
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
