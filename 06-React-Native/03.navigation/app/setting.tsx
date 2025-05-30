import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Setting() {
  return (
    <View>
      <Text>Setting</Text>

      <Link href="/">home</Link>
      <Link href="/about">about</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
