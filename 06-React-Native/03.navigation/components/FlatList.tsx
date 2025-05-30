import { userData } from "@/data/index";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Index</Text>

      <FlatList
        data={userData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 200 }}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          );
        }}
      />

      {/*
      not recommended
      {userData.map((user: any) => (
        <View style={{height:200}} key={user.id}>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
          <Text>{user.phone}</Text>
          <Text>{user.website}</Text>
          <Text>{user.company.name}</Text>
        </View>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({});
