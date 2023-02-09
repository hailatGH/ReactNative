import React from "react";
// import { Button, Text } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import { Screen } from "./app/components";
import { AuthNavigator, navigationTheme, AppNavigator } from "./app/navigation";

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Button
//       title="View Tweet"
//       onPress={() => navigation.navigate("TweetDetails", { id: "1" })}
//     />
//   </Screen>
// );

// const TweetDetails = ({ route }) => (
//   <Screen>
//     <Text>TweetDetails {route.params.id}</Text>
//   </Screen>
// );

// const Stack = createNativeStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//       // headerShown: false,
//     }}
//   >
//     <Stack.Screen
//       name="Tweets"
//       component={Tweets}
//       options={{
//         headerStyle: { backgroundColor: "tomato" },
//         headerTintColor: "white",
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen name="TweetDetails" component={TweetDetails} />
//   </Stack.Navigator>
// );

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Feed" component={StackNavigator} />
//     <Tab.Screen name="Account" component={StackNavigator} />
//   </Tab.Navigator>
// );

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
