import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { router } from "expo-router";

export default function Index() {
  // onAuthStateChanged(auth, (user) => {
  // if (user) {
  //   console.log("User is signed in:", user);
  // } else {
  // router.push("/login");
  // console.log("No user is signed in.");
  //   }
  // });
  return (
    <View>
      <Text onPress={() => router.push("/login")}>Index</Text>
      <Text onPress={() => router.push("/map")}>map</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
