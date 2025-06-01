import { StyleSheet, Text, View, TextInput, Alert, Button } from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("🚀 ~ .then ~ userCredential:", userCredential);
        router.replace("/");
      })
      .catch((error) => {
        console.log("🚀 ~ handleLogin ~ error:", error)
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Login Failed',errorMessage);
      });
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
        onChange={(e) => setPassword(e.nativeEvent.text)}
        inputMode="text"
        style={{ borderColor: "red", borderWidth: 2 }}
      />

      <Button onPress={handleLogin} title="Login"></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
