import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const App = () => {
  const [getText, setText] = useState("");
  const checker = () => {
    if (getText.length > 2 || Number(getText) < 0) {
      return (
        <Text style={{ color: "red" }}>
          Number Cannot be Greater Then 2 digits and cannot be negative
        </Text>
      );
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 100, borderRadius: 2 }}
        placeholder="Hello from Text Input"
        onChangeText={(data) => {
          setText(data);
        }}
        keyboardType="decimal-pad"
      />
      {checker()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
