import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Colors from "./constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "./screens/LandingPage";
import AllExpenses from "./screens/AllExpenses";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Colors.neutral,
            tabBarStyle: {
              backgroundColor: Colors.primary,
            },
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTitleStyle: {
              color: Colors.neutral,
            },
            sceneContainerStyle: { backgroundColor: Colors.error },
          }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: () => {
                return (
                  <Ionicons name="home" color={Colors.neutral} size={24} />
                );
              },
              sceneContainerStyle: { backgroundColor: Colors.primary },
              headerRight: () => {
                return <Ionicons name="add" color={Colors.neutral} size={36} />;
              },
            }}
            name="Home"
            component={LandingPage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => {
                return (
                  <Ionicons name="cash" color={Colors.neutral} size={24} />
                );
              },
            }}
            name="Expenses"
            component={AllExpenses}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.neutral,
//   },
// });
