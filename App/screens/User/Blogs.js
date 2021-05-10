import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BlogsComponent from "../../components/User/Blogs";
let array = [1, 2, 3, 4, 5, 6];

const Blogs = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <BlogsComponent />
        <BlogsComponent />
      </View>
    </ScrollView>
  );
};
export default Blogs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
