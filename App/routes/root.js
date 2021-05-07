import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./BottomTabs";
import Header from "../components/Generic/Header";
import Blog from "../screens/User/Blogs";
import CustomDrawerContent from "./Drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const DrawerComponent = () => {
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
    </Drawer.Navigator>
  );
};

// const Stack = createStackNavigator();
// const MyStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: true,
//         header: () => <Header />,
//       }}
//       initialRouteName="Main"
//     >
//       <Stack.Screen name="Main" component={DrawerComponent} />
//     </Stack.Navigator>
//   );
// };
export default DrawerComponent;
