import React, { useContext } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/User/Home";
import Header from "../components/Generic/Header";
import CarDetails from "../screens/User/CarDetails";
import CustomDrawerContent from "./Drawer";
import AboutScreen from "../screens/User/About";
import BlogScreen from "../screens/User/Blogs";
import CarsScreen from "../screens/User/Cars";
import CategoryScreen from "../screens/User/CarCategory";
import BlogDetails from "../screens/User/BlogDetails";
import CartScreen from "../screens/Cart/CartScreen";
import PaymentDetails from "../screens/Cart/PaymentDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "react-native-elements";
import { theme } from "../theme";
import { Store } from "../store";
import SucessScreen from "../screens/Cart/SucessScreen";
const Drawer = createDrawerNavigator();
const DrawerComponent = () => {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
      initialRouteName="Root"
    >
      <Drawer.Screen name="Root" component={Home} />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="CarDetails"
        component={CarDetails}
      />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Blogs" component={BlogScreen} />
      {/* <Drawer.Screen name="BlogDetails" component={BlogDetails} /> */}
      <Drawer.Screen name="Cars" component={CarsScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();
const MyStack = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Main"
    >
      <Stack.Screen name="Main" component={DrawerComponent} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.Colors.primary,
          },
          headerTitleStyle: {
            color: theme.Colors.White,
          },
          headerTintColor: theme.Colors.White,
        }}
        name="BlogDetails"
        component={BlogDetails}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.Colors.primary,
          },
          headerTitleStyle: {
            color: theme.Colors.White,
          },
          headerTitle: <Text>{state.category}</Text>,
          headerTintColor: theme.Colors.White,
        }}
        name="CarsCategory"
        component={CategoryScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.Colors.primary,
          },
          headerTitleStyle: {
            color: theme.Colors.White,
          },
          headerTitle: <Text>Billing Details</Text>,
          headerTintColor: theme.Colors.White,
        }}
        name="PaymentDetails"
        component={PaymentDetails}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SucessScreen"
        component={SucessScreen}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
