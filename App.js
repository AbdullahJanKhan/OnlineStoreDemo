import * as React from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity="0.8"
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity="0.8"
        style={styles.button}
        onPress={() => navigation.navigate("Employee")}
      >
        <Text>Manage Employees</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity="0.8"
        style={styles.button}
        onPress={() => navigation.navigate("Order")}
      >
        <Text>Manage Order</Text>
      </TouchableOpacity>
    </View>
  );
};
const ProductScreen = ({ navigation }) => {
  const productLst = [
    ["a", "abbot"],
    ["b", "abbot"],
    ["c", "werrick"],
    ["d", "werrick"],
  ];
  var i = 0;
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      {productLst.map((data) => (
        <TouchableOpacity
          activeOpacity="0.8"
          key={i++}
          style={styles.button2}
          onPress={() => navigation.navigate("Product Details")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.testStyle}>Product Name: xyz</Text>
            <Text style={styles.testStyle}>Manufacturer: abc</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const ProductDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity="0.8"
        style={styles.button2}
        onPress={() => navigation.popToTop()}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.testStyle}>Product Price: $200</Text>
          <Text style={styles.testStyle}>Stock Avaliable: 223</Text>
          <Text style={styles.testStyle}>Expiry Date: 8/23</Text>
        </View>
        <Text>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const EmployeeScreen = ({ navigation }) => {
  const productLst = [
    ["a", "abbot"],
    ["b", "abbot"],
    ["c", "werrick"],
    ["d", "werrick"],
  ];
  var i = 0;
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      {productLst.map((data) => (
        <TouchableOpacity
          activeOpacity="0.8"
          key={i++}
          style={styles.button2}
          onPress={() => navigation.navigate("Employee Details")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.testStyle}>Employee ID: {i}</Text>
            <Text style={styles.testStyle}>Employee Name: abc</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const EmployeeDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity="0.8"
        style={styles.button2}
        onPress={() => navigation.popToTop()}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.testStyle}>Salary: $20 / Hour</Text>
          <Text style={styles.testStyle}>Joining Date: 8/19</Text>
          <Text style={styles.testStyle}>Address: R-600 15A/5</Text>
        </View>

        <Text>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const OrderScreen = ({ navigation }) => {
  const productLst = [
    ["a", "abbot"],
    ["b", "abbot"],
    ["c", "werrick"],
    ["d", "werrick"],
  ];
  var i = 0;
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      {productLst.map((data) => (
        <TouchableOpacity
          activeOpacity="0.8"
          key={i++}
          style={styles.button2}
          onPress={() => navigation.navigate("Order Details")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.testStyle}>Order ID: {i+1010}</Text>
            <Text style={styles.testStyle}>Manufacturer: AJK Crop</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const OrderDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity="0.8"
        style={styles.button2}
        onPress={() => navigation.popToTop()}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.testStyle}>Order Price: $200</Text>
          <Text style={styles.testStyle}>Order Quantity: 8</Text>
        </View>

        <Text>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailScreen} />
      <Stack.Screen name="Employee" component={EmployeeScreen} />
      <Stack.Screen name="Employee Details" component={EmployeeDetailScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Order Details" component={OrderDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 5,
    width: "35%",
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 5,
  },
  testStyle: {
    padding: 5,
    margin: 5,
  },
});
