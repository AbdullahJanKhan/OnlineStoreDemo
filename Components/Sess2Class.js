import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

function ButtonInc(props) {
  return (
    <TouchableOpacity onPress={props.press} activeOpacity="0.2">
      <Text style={styles.testStyle}>+</Text>
    </TouchableOpacity>
  );
}

function ButtonDec(props) {
  return (
    <TouchableOpacity onPress={props.press} activeOpacity="0.2">
      <Text style={styles.testStyle}>-</Text>
    </TouchableOpacity>
  );
}

function TextCounter(props) {
  return <Text style={styles.textCounterStyle}>{props.value}</Text>;
}

export default function App() {
  const [getIncCounter, setIncCounter] = useState(0);
  const inc = () => {
    setIncCounter(getIncCounter + 1);
  };
  const dec = () => {
    setIncCounter(getIncCounter - 1);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "33%",}}>
          <ButtonInc press={inc} />
        </View>
        <View style={{ width: "33%", borderWidth:2 }}>
          <TextCounter value={getIncCounter} />
        </View>
        <View style={{ width: "33%" }}>
          <ButtonDec press={dec} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  testStyle: {
    fontSize: 20,
    width: "33%",
    textAlign: "center",
    backgroundColor: "grey",
  },
  textCounterStyle: {
    fontSize: 18,
    borderRadius: 25,
  },
});
