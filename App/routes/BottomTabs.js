import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/User/Home";
import BlogScreen from "../screens/User/Blogs";
import AboutScreen from "../screens/User/About";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { useTheme } from "react-native-elements";
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator screenOptions={{}} initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={20} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Entypo name="book" size={20} />,
        }}
        name="Blogs"
        component={BlogScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={20} />,
        }}
        name="About"
        component={AboutScreen}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;