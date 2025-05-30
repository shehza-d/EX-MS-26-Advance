import { WebView } from "react-native-webview";

export default function Privacy() {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{
        uri: "https://yango.com/legal/yango_privacy_notice/?lang=en",
      }}
    />
  );
}
