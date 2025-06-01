import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
      } else {
        router.replace("/login");
        console.log("No user is signed in.");
      }
    });
  }, []);

  const handleLogout = async () => await signOut(auth);

  return (
    <View>
      <Text>Home page</Text>

      <Text onPress={() => router.push("/login")}>Index</Text>
      <Text onPress={() => router.push("/map")}>map</Text>

      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
