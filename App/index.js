import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./routes/root";
import { ThemeProvider } from "react-native-elements";
import { theme } from "./theme";
const Index = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </NavigationContainer>
  );
};
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
