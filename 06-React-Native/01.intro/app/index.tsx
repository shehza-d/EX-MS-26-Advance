import { Button, Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View style={styles.myFlex}>
      {/* <Text style={{ margin: "auto", fontSize: 30, color: "blue" }}>
        Shehzad 3
      </Text> */}

      {/* <Image
        height={200}
        width={300}
        source={{
          uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F03%2F12%2F341770-Audi_R8-car-vehicle-Super_Car-electric_car-blue_cars.jpg&f=1&nofb=1&ipt=2b14bbac41e00fe21eaec7844a02fd9e28e71df9b073d5929db940d45c331279",
        }}
      /> */}

      {/* <Button title="My Buttoonnnn"></Button> */}

      {/* <View style={[styles.myBox, styles.myBoxOne]}>
        <Text>Box 1</Text>
      </View>

      <View style={styles.myBox}>
        <Text>Box 2</Text>
      </View>
      <View style={[styles.myBox, { backgroundColor: "green" }]}>
        <Text>Box 3</Text>
      </View> */}

      <Pressable
        style={styles.button}
        onLongPress={() => {
          alert("Button Long Pressed");
        }}
        onPress={() => {
          alert("Button Short Pressed");
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>My Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  myFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  myBox: {
    backgroundColor: "red",
    color: "white",
    padding: 20,
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  myBoxOne: {
    backgroundColor: "blue",
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
    height: 100,
    width: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
