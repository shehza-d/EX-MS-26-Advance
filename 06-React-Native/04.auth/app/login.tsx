import { StyleSheet, Text, View, TextInput, Alert, Button } from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log("🚀 ~ .then ~ userCredential:", userCredential);
    //     router.push("/");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     Alert.alert(errorMessage);
    //   });
  };
  return (
    <View>
      <Text>Login</Text>

      <TextInput
        onChange={(e) => setEmail(e.nativeEvent.text)}
        inputMode="text"
        style={{ borderColor: "red", borderWidth: 2 }}
      />
      <TextInput
        inputMode="text"
        style={{ borderColor: "red", borderWidth: 2 }}
      />

      <Button onPress={handleLogin} title="Login"></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
