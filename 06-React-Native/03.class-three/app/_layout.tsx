import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* <Stack.Screen name="(tabs)" /> */}
      <Stack.Screen name="index" />
      <Stack.Screen name="camera" />
    </Stack>
  );
}
