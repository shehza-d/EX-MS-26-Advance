import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

export default function Tab() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "home",
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                color={focused ? "red" : "purple"}
                size={40}
              />
            ),
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Tabs.Screen name="cart" options={{ title: "cartt" }} />
        <Tabs.Screen name="profile" options={{ title: "profilee" }} />
      </Tabs>
    </>
  );
}
