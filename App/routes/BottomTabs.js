import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/User/Home";
import BlogScreen from "../screens/User/Blogs";
import CarsScreen from "../screens/User/Cars";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-elements";
import BlogDetails from "../screens/User/BlogDetails";
import { createStackNavigator } from "@react-navigation/stack";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MyTabs = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.Colors.primary,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome color={color} name="home" size={20} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo color={color} name="book" size={20} />
          ),
        }}
        name="Blogs"
        component={Blogs}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="md-car-sport" size={20} />
          ),
        }}
        name="Cars"
        component={CarsScreen}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;

const Blogs = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Blogs"
    >
      <Stack.Screen name="Blogs" component={BlogScreen} />
      <Stack.Screen name="BlogDetails" component={BlogDetails} />
    </Stack.Navigator>
  );
};
