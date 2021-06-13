import React, { useState, useEffect } from "react";
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
  const [listOfBlogs, setListOfBlogs] = useState([]);
  const { theme } = useTheme();
  let x = false;
  const {
    data: BlogsList,
    isLoading: BlogsLoading,
    isError: BlogsError,
  } = FetchBlogs();

  useEffect(() => {
    setListOfBlogs(BlogsList);
  }, [BlogsList]);
  console.log("BlogsError", BlogsError);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {BlogsLoading ? (
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
            <>
              {BlogsError ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>Check Your Internet Connection </Text>
                </View>
              ) : (
                <>
                  {ListOfBlogs.length !== 0 ? (
                    <FlatList
                      data={BlogsList}
                      renderItem={({ item }) => <BlogsComponent data={item} />}
                    />
                  ) : (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>No Blogs to Display</Text>
                    </View>
                  )}
                </>
              )}
            </>
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
