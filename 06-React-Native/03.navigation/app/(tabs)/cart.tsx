import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Cart() {
  return (
    <View>
      <Text>Cart</Text>

      <Link href={"/setting"}> go to setting</Link>
    </View>
  );
}
