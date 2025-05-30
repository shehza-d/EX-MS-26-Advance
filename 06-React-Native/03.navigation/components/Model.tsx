import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

export default function Index() {
  const [showModel, setShowModel] = useState(false);

  return (
    <View>
      <Text>React Native Modal</Text>

      <Pressable
        onPress={() => setShowModel(true)}
        style={{ backgroundColor: "blue", padding: 10, margin: 10 }}
      >
        <Text>open model</Text>
      </Pressable>

      <Modal
        visible={showModel}
        onRequestClose={() => setShowModel(false)}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        backdropColor={"#dad"}
        animationType="slide"
      >
        <Text>My model 2</Text>

        <Pressable
          onPress={() => setShowModel(false)}
          style={{ backgroundColor: "red", padding: 10, margin: 10 }}
        >
          <Text>close model</Text>
        </Pressable>
      </Modal>
    </View>
  );
}
