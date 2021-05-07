import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Blogs = () => {
  return (
    <View style={styles.container}>
      <Text>Blogs</Text>
    </View>
  );
};
export default Blogs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
