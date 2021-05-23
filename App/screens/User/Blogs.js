import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from "react-native";
import BlogsComponent from "../../components/User/Blogs";
import FetchBlogs from "../../hooks/useFetchBlogs";
import { useTheme } from "react-native-elements";
let deviceHeight = Dimensions.get("window").height;
const Blogs = () => {
  const { theme } = useTheme();
  let x = false;
  const { data: BlogsList, isLoading: BlogsLoading, isError } = FetchBlogs();
  useEffect(() => {
    console.log("blogss", BlogsList);
  }, [BlogsList]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {x ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color={theme.Colors.primary} />
            </View>
          ) : (
            <FlatList
              data={BlogsList}
              renderItem={({ item }) => <BlogsComponent data={item} />}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default Blogs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: deviceHeight,
    backgroundColor: "#fff",
    padding: 10,
  },
});
