import React, { useState } from "react";
import { StatusBar, Switch, Text, View } from "react-native";

export default function Index() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "#dada",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar hidden={switchValue} />

      <Switch
        value={switchValue}
        onChange={() => setSwitchValue(!switchValue)}
      />
      <Text>index: {JSON.stringify(switchValue)} </Text>
    </View>
  );
}
